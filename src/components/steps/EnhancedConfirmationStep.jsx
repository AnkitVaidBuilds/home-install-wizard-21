import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, MapPin, User } from 'lucide-react';
import { AnimatedPanelContainer } from '../AnimatedPanelContainer';

export const EnhancedConfirmationStep = ({ 
  leadData 
}) => {
  const getServiceSummary = () => {
    if (leadData.serviceType === 'flooring') {
      return {
        title: `${leadData.flooringType?.charAt(0).toUpperCase()}${leadData.flooringType?.slice(1)} Flooring ${leadData.projectGoal?.charAt(0).toUpperCase()}${leadData.projectGoal?.slice(1)}`,
        details: [
          `${leadData.flooringType} flooring`,
          `${leadData.flooringArea} area`,
          `Subfloor prep: ${leadData.subfloorPrep === 'yes' ? 'Yes' : 'No'}`
        ]
      };
    } else {
      return {
        title: `${leadData.doorType?.charAt(0).toUpperCase()}${leadData.doorType?.slice(1)} Door ${leadData.projectGoal?.charAt(0).toUpperCase()}${leadData.projectGoal?.slice(1)}`,
        details: [
          `${leadData.doorType} door installation`,
          `${leadData.doorMaterial} material`,
          `${leadData.doorQuantity} door${leadData.doorQuantity === 'multiple' ? 's' : ''}`
        ]
      };
    }
  };

  const summary = getServiceSummary();

  return (
    <AnimatedPanelContainer isVisible={true}>
      {/* Left Panel - Project Summary */}
      <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-dark">Project Summary</h3>
              <p className="text-sm text-muted-foreground">Review your project details</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/70 rounded-lg border">
              <h4 className="font-medium text-text-dark mb-2">{summary.title}</h4>
              <div className="space-y-2">
                {summary.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {leadData.serviceType === 'flooring' ? 'Flooring Project' : 'Door Project'}
              </Badge>
              <Badge variant="outline" className="border-primary/30">
                {leadData.projectGoal === 'replace' ? 'Replacement' : leadData.projectGoal === 'new' ? 'New Installation' : 'Repair'}
              </Badge>
            </div>
          </div>

          <div className="pt-4 border-t border-primary/20">
            <p className="text-sm text-muted-foreground">
              Ready to get your personalized quote? Just provide your contact details on the next step.
            </p>
          </div>
        </div>
      </Card>

      {/* Middle Panel - What's Next */}
      <Card className="p-6 h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-dark">What's Next</h3>
              <p className="text-sm text-muted-foreground">Your journey to beautiful floors/doors</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Free Consultation',
                desc: 'We\'ll contact you within 24 hours to schedule your free in-home consultation',
                time: 'Within 24 hours'
              },
              {
                step: '2', 
                title: 'Detailed Quote',
                desc: 'Our expert will measure your space and provide a detailed, no-obligation quote',
                time: '1-2 days'
              },
              {
                step: '3',
                title: 'Professional Installation',
                desc: 'Our licensed team will complete your project with quality materials and craftsmanship',
                time: '1-3 weeks'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-3 bg-white/70 rounded-lg border animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-text-dark text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  <p className="text-xs text-accent font-medium mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Right Panel - Why Choose Us */}
      <Card className="p-6 h-full bg-gradient-to-br from-sage-green/5 to-sage-green/10 border-sage-green/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sage-green/20 rounded-lg">
              <User className="h-6 w-6 text-sage-green" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-dark">Why Choose Us</h3>
              <p className="text-sm text-muted-foreground">Your trusted installation partner</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: '🏆',
                title: 'Licensed & Insured',
                desc: 'Fully licensed contractors with comprehensive insurance coverage'
              },
              {
                icon: '⭐',
                title: '5-Year Warranty',
                desc: 'Industry-leading warranty on all materials and workmanship'
              },
              {
                icon: '💰',
                title: 'Free Estimates',
                desc: 'No-obligation quotes with transparent, upfront pricing'
              },
              {
                icon: '🚀',
                title: 'Fast Turnaround',
                desc: 'Most projects completed within 1-3 weeks of approval'
              },
              {
                icon: '🧹',
                title: 'Complete Service',
                desc: 'From consultation to cleanup, we handle everything'
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-lg">{feature.icon}</div>
                <div>
                  <h4 className="font-medium text-text-dark text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-sage-green/20">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-sage-green" />
              <span className="text-muted-foreground">Serving your local area with pride</span>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedPanelContainer>
  );
};
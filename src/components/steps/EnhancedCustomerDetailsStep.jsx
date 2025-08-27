import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { AnimatedPanelContainer } from '../AnimatedPanelContainer';

// Import team image
import teamImage from '@/assets/professional-team.jpg';

export const EnhancedCustomerDetailsStep = ({ 
  leadData, 
  updateLeadData 
}) => {
  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  useEffect(() => {
    const errors = {};
    
    if (leadData.email && !validateEmail(leadData.email)) {
      errors.email = true;
    }
    
    if (leadData.phone && !validatePhone(leadData.phone)) {
      errors.phone = true;
    }

    setValidationErrors(errors);
  }, [leadData.email, leadData.phone]);

  const getCompletionStatus = () => {
    const fields = ['fullName', 'email', 'phone', 'address', 'startTime'];
    const completed = fields.filter(field => leadData[field]).length;
    return { completed, total: fields.length };
  };

  const status = getCompletionStatus();

  return (
    <AnimatedPanelContainer isVisible={true}>
      {/* Left Panel - Form */}
      <Card className="p-6 h-full">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-dark">Contact Details</h3>
                <p className="text-sm text-muted-foreground">We'll use this to send your quote</p>
              </div>
            </div>
            <Badge variant={status.completed === status.total ? "default" : "secondary"} className="animate-fade-in">
              {status.completed}/{status.total} Complete
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium">
                <User className="h-4 w-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={leadData.fullName || ''}
                onChange={(e) => updateLeadData({ fullName: e.target.value })}
                className="h-12 bg-white border-input hover:border-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={leadData.email || ''}
                onChange={(e) => updateLeadData({ email: e.target.value })}
                className={`h-12 bg-white transition-colors ${
                  validationErrors.email 
                    ? 'border-destructive focus:border-destructive' 
                    : 'border-input hover:border-primary/50 focus:border-primary'
                }`}
              />
              {validationErrors.email && (
                <p className="text-xs text-destructive animate-fade-in">Please enter a valid email address</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                <Phone className="h-4 w-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={leadData.phone || ''}
                onChange={(e) => updateLeadData({ phone: e.target.value })}
                className={`h-12 bg-white transition-colors ${
                  validationErrors.phone 
                    ? 'border-destructive focus:border-destructive' 
                    : 'border-input hover:border-primary/50 focus:border-primary'
                }`}
              />
              {validationErrors.phone && (
                <p className="text-xs text-destructive animate-fade-in">Please enter a valid phone number</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Project Address *
              </Label>
              <Textarea
                id="address"
                placeholder="Enter the address where the work will be performed"
                value={leadData.address || ''}
                onChange={(e) => updateLeadData({ address: e.target.value })}
                className="min-h-20 bg-white border-input hover:border-primary/50 focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                When would you like to start? *
              </Label>
              <RadioGroup
                value={leadData.startTime || ''}
                onValueChange={(value) => updateLeadData({ startTime: value })}
                className="space-y-2"
              >
                {[
                  { value: 'within-1-month', label: 'Within 1 month', desc: 'Ready to start soon' },
                  { value: '1-3-months', label: '1-3 months', desc: 'Planning ahead' },
                  { value: '3-plus-months', label: '3+ months', desc: 'Just exploring options' }
                ].map((option) => (
                  <div key={option.value} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors group">
                    <RadioGroupItem value={option.value} id={`start-${option.value}`} className="mt-1" />
                    <div className="flex-grow">
                      <Label htmlFor={`start-${option.value}`} className="cursor-pointer font-medium group-hover:text-primary transition-colors">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </Card>

      {/* Middle Panel - Team Image */}
      <Card className="overflow-hidden h-full">
        <div className="relative h-full min-h-80">
          <img
            src={teamImage}
            alt="Professional installation team ready to help with your project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h4 className="font-medium text-text-dark">Your Trusted Team</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Licensed professionals with years of experience in quality home installations.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Right Panel - Next Steps */}
      <Card className="p-6 h-full bg-gradient-to-br from-wood-warm/5 to-wood-warm/10 border-wood-warm/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-wood-warm/20 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-wood-warm" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-dark">Almost Done!</h3>
              <p className="text-sm text-muted-foreground">You're one step away from your quote</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/70 rounded-lg border">
              <h4 className="font-medium text-text-dark mb-2">Your Project Summary</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                  {leadData.serviceType === 'flooring' ? 'Flooring' : 'Door'} {leadData.projectGoal}
                </div>
                {leadData.serviceType === 'flooring' && (
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                    {leadData.flooringType} flooring, {leadData.flooringArea}
                  </div>
                )}
                {leadData.serviceType === 'door' && (
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                    {leadData.doorType} {leadData.doorMaterial} door{leadData.doorQuantity === 'multiple' ? 's' : ''}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-text-dark">What happens next:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-wood-warm rounded-full mt-2" />
                  We'll contact you within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-wood-warm rounded-full mt-2" />
                  Schedule your free consultation
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-wood-warm rounded-full mt-2" />
                  Receive your detailed quote
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-wood-warm/20">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-wood-warm" />
              <span>Questions? Call us anytime at (555) 123-HOME</span>
            </div>
          </div>
        </div>
      </Card>
    </AnimatedPanelContainer>
  );
};
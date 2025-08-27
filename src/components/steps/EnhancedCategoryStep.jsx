import React from 'react';
import { Card } from '@/components/ui/card';
import { SmartServiceInput } from '../SmartServiceInput';
import { AnimatedPanelContainer } from '../AnimatedPanelContainer';

// Import service images
import flooringImage from '@/assets/hardwood-flooring.jpg';
import doorImage from '@/assets/interior-door.jpg';

export const EnhancedCategoryStep = ({ 
  leadData, 
  updateLeadData,
  onSearchStateChange
}) => {
  const handleServiceSelect = (serviceType, projectGoal) => {
    updateLeadData({ serviceType, projectGoal });
    onSearchStateChange?.(true); // Show progress bar when service is selected
  };

  const handleSearchClear = () => {
    // Reset leadData when search is cleared
    updateLeadData({ serviceType: '', projectGoal: '' });
    onSearchStateChange?.(false); // Hide progress bar when search is cleared
  };

  const hasSelectedService = leadData.serviceType && leadData.projectGoal;

  return (
    <div className="space-y-8">
      {/* Smart Input Section */}
      <SmartServiceInput 
        onServiceSelect={handleServiceSelect}
        selectedService={hasSelectedService ? `${leadData.serviceType}-${leadData.projectGoal}` : undefined}
        onSearchClear={handleSearchClear}
      />

      {/* Three Panel Layout - Only show after selection */}
      <AnimatedPanelContainer 
        isVisible={!!hasSelectedService}
        className="mt-12"
      >
        {/* Left Panel - Service Details */}
        <Card className="p-6 h-full bg-gradient-to-br from-lowes-blue/5 to-lowes-blue/10 border-lowes-blue/20">
          <div className="space-y-4">
            <div className="p-3 bg-lowes-blue/10 rounded-lg inline-block">
              <div className="w-8 h-8 bg-lowes-navy rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {leadData.serviceType === 'flooring' ? 'Flooring Project' : 'Door Project'}
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Service:</strong> {leadData.serviceType === 'flooring' ? 'Flooring Installation' : 'Door Installation'}</p>
                <p><strong>Type:</strong> {leadData.projectGoal === 'replace' ? 'Replacement' : leadData.projectGoal === 'new' ? 'New Installation' : 'Repair'}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-lowes-blue/20">
              <p className="text-sm text-muted-foreground">
                {leadData.serviceType === 'flooring' 
                  ? 'Next, we\'ll gather details about your flooring preferences and project scope.'
                  : 'Next, we\'ll collect information about door types, materials, and installation requirements.'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Middle Panel - Image */}
        <Card className="overflow-hidden h-full">
          <div className="relative h-full min-h-80">
            <img
              src={leadData.serviceType === 'flooring' ? flooringImage : doorImage}
              alt={leadData.serviceType === 'flooring' ? 'Professional flooring installation' : 'Professional door installation'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium text-foreground">
                  Professional {leadData.serviceType === 'flooring' ? 'flooring' : 'door'} {leadData.projectGoal}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel - Information */}
        <Card className="p-6 h-full bg-gradient-to-br from-lowes-light-gray/50 to-lowes-light-gray border-lowes-gray/20">
          <div className="space-y-4">
            <div className="p-3 bg-lowes-blue/10 rounded-lg inline-block">
              <div className="w-8 h-8 bg-lowes-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What's Included
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-lowes-blue rounded-full" />
                  Free consultation & measurements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-lowes-blue rounded-full" />
                  Professional installation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-lowes-blue rounded-full" />
                  Quality materials & warranty
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-lowes-blue rounded-full" />
                  Cleanup & disposal
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-lowes-blue/20">
              <p className="text-xs text-muted-foreground">
                Licensed • Insured • 5-Year Warranty
              </p>
            </div>
          </div>
        </Card>
      </AnimatedPanelContainer>
    </div>
  );
};
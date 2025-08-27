import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, Edit } from 'lucide-react';
import hardwoodImage from '@/assets/hardwood-flooring.jpg';
import tileImage from '@/assets/tile-flooring.jpg';
import exteriorDoorImage from '@/assets/exterior-door.jpg';
import interiorDoorImage from '@/assets/interior-door.jpg';

export const ConfirmationStep = ({ leadData, updateLeadData }) => {
  const getImage = () => {
    if (leadData.serviceType === 'flooring') {
      if (leadData.flooringType === 'tile') return tileImage;
      return hardwoodImage;
    } else {
      if (leadData.doorType === 'internal') return interiorDoorImage;
      return exteriorDoorImage;
    }
  };

  const formatProjectSummary = () => {
    if (leadData.serviceType === 'flooring') {
      return {
        service: 'Flooring Installation',
        details: [
          `Material: ${leadData.flooringType?.charAt(0).toUpperCase() + leadData.flooringType?.slice(1)}`,
          `Area: ${leadData.flooringArea} square feet`,
          `Subfloor prep: ${leadData.subfloorPrep === 'yes' ? 'Required' : 'Not needed'}`,
          `Project type: ${leadData.projectGoal?.charAt(0).toUpperCase() + leadData.projectGoal?.slice(1)}`
        ]
      };
    } else {
      return {
        service: 'Door Installation',
        details: [
          `Type: ${leadData.doorType?.charAt(0).toUpperCase() + leadData.doorType?.slice(1)} door`,
          `Material: ${leadData.doorMaterial?.charAt(0).toUpperCase() + leadData.doorMaterial?.slice(1)}`,
          `Quantity: ${leadData.doorQuantity === 'single' ? 'Single door' : 'Multiple doors'}`,
          `Project type: ${leadData.projectGoal?.charAt(0).toUpperCase() + leadData.projectGoal?.slice(1)}`
        ]
      };
    }
  };

  const projectSummary = formatProjectSummary();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">
      {/* Panel 1: Confirmation Form */}
      <div className="md:col-span-1 space-y-6 animate-slide-in-left min-h-full">
        <div>
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            Confirm Your Project
          </h2>
          
          <div className="space-y-4">
            <Card className="p-4 bg-muted/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <span className="font-semibold text-text-dark">{projectSummary.service}</span>
                </div>
                
                {projectSummary.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div>
              <Label className="text-base font-medium">Is this information correct?</Label>
              <RadioGroup 
                value="yes"
                className="mt-3"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-sage-green bg-sage-green/10">
                  <RadioGroupItem value="yes" id="correct-yes" checked />
                  <CheckCircle className="h-5 w-5 text-sage-green" />
                  <Label htmlFor="correct-yes" className="text-base cursor-pointer font-medium">
                    Yes, proceed with these details
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-muted-foreground transition-colors opacity-60">
                  <RadioGroupItem value="no" id="correct-no" disabled />
                  <Edit className="h-5 w-5 text-muted-foreground" />
                  <Label htmlFor="correct-no" className="text-base cursor-pointer">
                    No, I need to make changes (use Back button)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* Panel 2: High-Quality Image */}
      <div className="md:col-span-1 animate-fade-in min-h-full">
        <Card className="h-full overflow-hidden shadow-medium">
          <img 
            src={getImage()}
            alt="Selected service preview"
            className="w-full h-full object-cover"
          />
        </Card>
      </div>

      {/* Panel 3: Confirmation Information */}
      <div className="md:col-span-1 animate-slide-in-right min-h-full">
        <Card className="h-full p-6 bg-gradient-subtle border-0 shadow-soft">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-sage-green" />
              <h3 className="text-xl font-semibold text-text-dark">
                Project Confirmed
              </h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-sage-green/10 rounded-lg border border-sage-green/20">
                <p className="font-medium text-sage-green mb-1">✓ Project Details Confirmed</p>
                <p className="text-muted-foreground text-xs">
                  We'll prepare a detailed estimate based on your specifications.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-text-dark">Next Steps:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                    <p className="text-xs">Provide contact information</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                    <p className="text-xs">Schedule free consultation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                    <p className="text-xs">Receive detailed estimate</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                    <p className="text-xs">Professional installation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-sage-green" />
                  <span>Free on-site consultation</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-sage-green" />
                  <span>Licensed & insured professionals</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-sage-green" />
                  <span>5-year installation warranty</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-sage-green" />
                  <span>No obligation estimate</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Hammer, RefreshCw, Plus, Wrench } from 'lucide-react';
import hardwoodImage from '@/assets/hardwood-flooring.jpg';
import exteriorDoorImage from '@/assets/exterior-door.jpg';

export const CategoryStep = ({ leadData, updateLeadData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">
      {/* Panel 1: Form */}
      <div className="md:col-span-1 space-y-6 animate-slide-in-left min-h-full">
        <div>
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            What service do you need?
          </h2>
          
          <div className="space-y-4">
            <Label className="text-base font-medium">Service Type</Label>
            <RadioGroup 
              value={leadData.serviceType} 
              onValueChange={(value) => updateLeadData({ serviceType: value })}
            >
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors">
                <RadioGroupItem value="flooring" id="flooring" />
                <Hammer className="h-5 w-5 text-primary" />
                <Label htmlFor="flooring" className="text-base cursor-pointer">
                  Flooring Installation
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors">
                <RadioGroupItem value="door" id="door" />
                <Hammer className="h-5 w-5 text-wood-warm" />
                <Label htmlFor="door" className="text-base cursor-pointer">
                  Door Installation
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label className="text-base font-medium">Project Goal</Label>
          <RadioGroup 
            value={leadData.projectGoal} 
            onValueChange={(value) => updateLeadData({ projectGoal: value })}
            className="mt-3"
          >
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors">
              <RadioGroupItem value="replace" id="replace" />
              <RefreshCw className="h-5 w-5 text-sage-green" />
              <Label htmlFor="replace" className="text-base cursor-pointer">
                Replace Existing
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors">
              <RadioGroupItem value="new" id="new" />
              <Plus className="h-5 w-5 text-primary" />
              <Label htmlFor="new" className="text-base cursor-pointer">
                New Installation
              </Label>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-colors">
              <RadioGroupItem value="repair" id="repair" />
              <Wrench className="h-5 w-5 text-wood-warm" />
              <Label htmlFor="repair" className="text-base cursor-pointer">
                Repair/Upgrade
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Panel 2: Image */}
      <div className="md:col-span-1 animate-fade-in min-h-full">
        <Card className="h-full overflow-hidden shadow-medium">
          <img 
            src={leadData.serviceType === 'flooring' ? hardwoodImage : exteriorDoorImage}
            alt={leadData.serviceType === 'flooring' ? 'Hardwood flooring installation' : 'Door installation'} 
            className="w-full h-full object-cover transition-all duration-500"
          />
        </Card>
      </div>

      {/* Panel 3: Information */}
      <div className="md:col-span-1 animate-slide-in-right min-h-full">
        <Card className="h-full p-6 bg-gradient-subtle border-0 shadow-soft">
          <div className="space-y-4">
            {leadData.serviceType === 'flooring' && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  Professional Flooring Installation
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Hardwood, laminate, tile, vinyl, and carpet installation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Subfloor preparation and existing flooring removal</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Professional-grade tools and materials</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Clean-up and finishing work included</p>
                  </div>
                </div>
              </>
            )}
            
            {leadData.serviceType === 'door' && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  Expert Door Installation
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-wood-warm rounded-full mt-2 flex-shrink-0"></div>
                    <p>Interior, exterior, and storm door installation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-wood-warm rounded-full mt-2 flex-shrink-0"></div>
                    <p>Wood, fiberglass, steel, and glass options</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-wood-warm rounded-full mt-2 flex-shrink-0"></div>
                    <p>Frame adjustment and weatherproofing</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-wood-warm rounded-full mt-2 flex-shrink-0"></div>
                    <p>Hardware installation and adjustment</p>
                  </div>
                </div>
              </>
            )}

            {!leadData.serviceType && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  Choose Your Service
                </h3>
                <p className="text-muted-foreground">
                  Select the type of installation service you need to see detailed information and pricing options.
                </p>
              </>
            )}

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                ✓ Licensed & Insured • ✓ 5-Year Warranty • ✓ Free Estimates
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
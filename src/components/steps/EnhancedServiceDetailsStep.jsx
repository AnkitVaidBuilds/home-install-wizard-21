import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AnimatedPanelContainer } from '../AnimatedPanelContainer';

// Import images
import hardwoodImage from '@/assets/hardwood-flooring.jpg';
import tileImage from '@/assets/tile-flooring.jpg';
import interiorDoorImage from '@/assets/interior-door.jpg';
import exteriorDoorImage from '@/assets/exterior-door.jpg';

export const EnhancedServiceDetailsStep = ({ 
  leadData, 
  updateLeadData 
}) => {
  const getImage = () => {
    if (leadData.serviceType === 'flooring') {
      if (leadData.flooringType === 'tile') return tileImage;
      return hardwoodImage;
    } else {
      if (leadData.doorType === 'external') return exteriorDoorImage;
      return interiorDoorImage;
    }
  };

  const getImageAlt = () => {
    if (leadData.serviceType === 'flooring') {
      return `Professional ${leadData.flooringType || 'flooring'} installation`;
    } else {
      return `Professional ${leadData.doorType || 'door'} installation`;
    }
  };

  const renderFlooringForm = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-text-dark mb-2">Flooring Details</h3>
          <p className="text-sm text-muted-foreground">Tell us about your flooring project</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flooring-type" className="text-sm font-medium">
            What type of flooring are you interested in? *
          </Label>
          <Select
            value={leadData.flooringType || ''}
            onValueChange={(value) => updateLeadData({ flooringType: value })}
          >
            <SelectTrigger className="h-12 bg-white border-input hover:border-primary/50 transition-colors">
              <SelectValue placeholder="Choose flooring type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hardwood">Hardwood</SelectItem>
              <SelectItem value="laminate">Laminate</SelectItem>
              <SelectItem value="tile">Tile</SelectItem>
              <SelectItem value="vinyl">Vinyl/LVP</SelectItem>
              <SelectItem value="carpet">Carpet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flooring-area" className="text-sm font-medium">
            Approximate area to be covered (sq ft) *
          </Label>
          <Input
            id="flooring-area"
            type="text"
            placeholder="e.g., 500 sq ft or 'entire first floor'"
            value={leadData.flooringArea || ''}
            onChange={(e) => updateLeadData({ flooringArea: e.target.value })}
            className="h-12 bg-white border-input hover:border-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Do you need subfloor preparation? *
          </Label>
          <RadioGroup
            value={leadData.subfloorPrep || ''}
            onValueChange={(value) => updateLeadData({ subfloorPrep: value })}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="yes" id="subfloor-yes" />
              <Label htmlFor="subfloor-yes" className="cursor-pointer">Yes, include preparation</Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="no" id="subfloor-no" />
              <Label htmlFor="subfloor-no" className="cursor-pointer">No, ready to install</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderDoorForm = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
          <h3 className="font-semibold text-text-dark mb-2">Door Details</h3>
          <p className="text-sm text-muted-foreground">Tell us about your door project</p>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">
            What type of door installation? *
          </Label>
          <RadioGroup
            value={leadData.doorType || ''}
            onValueChange={(value) => updateLeadData({ doorType: value })}
            className="space-y-2"
          >
            {[
              { value: 'internal', label: 'Interior Doors', desc: 'Bedroom, bathroom, closet doors' },
              { value: 'external', label: 'Exterior Doors', desc: 'Front door, back door, patio doors' },
              { value: 'storm', label: 'Storm Doors', desc: 'Screen doors, storm doors' }
            ].map((option) => (
              <div key={option.value} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option.value} id={`door-${option.value}`} className="mt-1" />
                <div className="flex-grow">
                  <Label htmlFor={`door-${option.value}`} className="cursor-pointer font-medium">
                    {option.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">{option.desc}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="door-material" className="text-sm font-medium">
            Preferred door material *
          </Label>
          <Select
            value={leadData.doorMaterial || ''}
            onValueChange={(value) => updateLeadData({ doorMaterial: value })}
          >
            <SelectTrigger className="h-12 bg-white border-input hover:border-primary/50 transition-colors">
              <SelectValue placeholder="Choose door material" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wood">Wood</SelectItem>
              <SelectItem value="fiberglass">Fiberglass</SelectItem>
              <SelectItem value="steel">Steel</SelectItem>
              <SelectItem value="glass">Glass</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">
            Number of doors *
          </Label>
          <RadioGroup
            value={leadData.doorQuantity || ''}
            onValueChange={(value) => updateLeadData({ doorQuantity: value })}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="single" id="door-single" />
              <Label htmlFor="door-single" className="cursor-pointer">Single door</Label>
            </div>
            <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="multiple" id="door-multiple" />
              <Label htmlFor="door-multiple" className="cursor-pointer">Multiple doors</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );

  const renderInfoPanel = () => {
    if (leadData.serviceType === 'flooring') {
      const flooringInfo = {
        hardwood: {
          title: 'Hardwood Flooring',
          benefits: ['Timeless beauty and durability', 'Increases home value', 'Long-lasting with proper care', 'Can be refinished multiple times'],
          considerations: ['Higher upfront cost', 'Sensitive to moisture', 'Regular maintenance required']
        },
        laminate: {
          title: 'Laminate Flooring',
          benefits: ['Cost-effective option', 'Easy to maintain', 'Scratch and fade resistant', 'Quick installation'],
          considerations: ['Cannot be refinished', 'Can sound hollow', 'Not ideal for wet areas']
        },
        tile: {
          title: 'Tile Flooring',
          benefits: ['Waterproof and durable', 'Easy to clean', 'Great for bathrooms/kitchens', 'Endless design options'],
          considerations: ['Cold underfoot', 'Grout maintenance', 'Hard surface can be uncomfortable']
        },
        vinyl: {
          title: 'Vinyl/LVP Flooring',
          benefits: ['Waterproof', 'Budget-friendly', 'Comfortable underfoot', 'Low maintenance'],
          considerations: ['Can dent with heavy items', 'May fade in direct sunlight', 'Not as premium feel']
        },
        carpet: {
          title: 'Carpet Flooring',
          benefits: ['Warm and comfortable', 'Sound absorption', 'Wide variety of styles', 'Budget-friendly'],
          considerations: ['Stains and odors', 'Allergen concerns', 'Shorter lifespan', 'Not suitable for wet areas']
        }
      };

      const info = leadData.flooringType ? flooringInfo[leadData.flooringType] : null;

      return (
        <Card className="p-6 h-full bg-gradient-to-br from-sage-green/5 to-sage-green/10 border-sage-green/20">
          <div className="space-y-4">
            <div className="p-3 bg-sage-green/10 rounded-lg inline-block">
              <div className="w-8 h-8 bg-sage-green rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">i</span>
              </div>
            </div>

            {info ? (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">{info.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-dark mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {info.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-text-dark mb-2">Considerations:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {info.considerations.map((consideration, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">Choose Your Flooring</h3>
                <p className="text-sm text-muted-foreground">
                  Select a flooring type to see detailed information about benefits, considerations, and what to expect during installation.
                </p>
              </div>
            )}
          </div>
        </Card>
      );
    }

    // Door information panel
    const doorInfo = {
      internal: 'Interior doors enhance privacy and style throughout your home. We offer various materials and styles to match your décor.',
      external: 'Exterior doors provide security, insulation, and curb appeal. Our professional installation ensures proper fit and weatherproofing.',
      storm: 'Storm doors add an extra layer of protection and energy efficiency while allowing natural light and ventilation.'
    };

    return (
      <Card className="p-6 h-full bg-gradient-to-br from-wood-warm/5 to-wood-warm/10 border-wood-warm/20">
        <div className="space-y-4">
          <div className="p-3 bg-wood-warm/10 rounded-lg inline-block">
            <div className="w-8 h-8 bg-wood-warm rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">i</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-dark mb-3">Door Installation</h3>
            
            {leadData.doorType ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {doorInfo[leadData.doorType]}
                </p>
                
                <div className="pt-3 border-t border-wood-warm/20">
                  <h4 className="font-medium text-text-dark mb-2">Installation Includes:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                      Professional measuring & fitting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                      Hardware installation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                      Weatherstripping (exterior doors)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-wood-warm rounded-full" />
                      Cleanup & disposal
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Select a door type to see specific information about installation and what's included.
              </p>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <AnimatedPanelContainer isVisible={true}>
      {/* Left Panel - Form */}
      <Card className="p-6 h-full">
        {leadData.serviceType === 'flooring' ? renderFlooringForm() : renderDoorForm()}
      </Card>

      {/* Middle Panel - Image */}
      <Card className="overflow-hidden h-full">
        <div className="relative h-full min-h-80">
          <img
            src={getImage()}
            alt={getImageAlt()}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 animate-slide-in-right">
              <h4 className="font-medium text-text-dark mb-1">
                {leadData.serviceType === 'flooring' 
                  ? (leadData.flooringType ? `${leadData.flooringType.charAt(0).toUpperCase() + leadData.flooringType.slice(1)} Flooring` : 'Professional Flooring')
                  : (leadData.doorType ? `${leadData.doorType.charAt(0).toUpperCase() + leadData.doorType.slice(1)} Door` : 'Professional Doors')
                }
              </h4>
              <p className="text-sm text-muted-foreground">
                Expert installation with quality materials
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Right Panel - Information */}
      {renderInfoPanel()}
    </AnimatedPanelContainer>
  );
};
import React from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import hardwoodImage from '@/assets/hardwood-flooring.jpg';
import tileImage from '@/assets/tile-flooring.jpg';
import exteriorDoorImage from '@/assets/exterior-door.jpg';
import interiorDoorImage from '@/assets/interior-door.jpg';

export const ServiceDetailsStep = ({ leadData, updateLeadData }) => {
  const getImage = () => {
    if (leadData.serviceType === 'flooring') {
      if (leadData.flooringType === 'tile') return tileImage;
      return hardwoodImage;
    } else {
      if (leadData.doorType === 'internal') return interiorDoorImage;
      return exteriorDoorImage;
    }
  };

  const getImageAlt = () => {
    if (leadData.serviceType === 'flooring') {
      return `${leadData.flooringType || 'flooring'} installation`;
    } else {
      return `${leadData.doorType || 'door'} installation`;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">
      {/* Panel 1: Form */}
      <div className="md:col-span-1 space-y-6 animate-slide-in-left min-h-full">
        <h2 className="text-2xl font-semibold text-text-dark mb-4">
          Project Specifications
        </h2>

        {leadData.serviceType === 'flooring' && (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Flooring Type</Label>
              <Select 
                value={leadData.flooringType || ''} 
                onValueChange={(value) => updateLeadData({ flooringType: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select flooring material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hardwood">Hardwood</SelectItem>
                  <SelectItem value="laminate">Laminate</SelectItem>
                  <SelectItem value="tile">Tile/Ceramic</SelectItem>
                  <SelectItem value="vinyl">Luxury Vinyl</SelectItem>
                  <SelectItem value="carpet">Carpet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Area (Square Feet)</Label>
              <Input
                type="number"
                placeholder="e.g. 500"
                value={leadData.flooringArea || ''}
                onChange={(e) => updateLeadData({ flooringArea: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-base font-medium">Subfloor Preparation Needed?</Label>
              <RadioGroup 
                value={leadData.subfloorPrep || ''} 
                onValueChange={(value) => updateLeadData({ subfloorPrep: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="prep-yes" />
                  <Label htmlFor="prep-yes">Yes, prep/remove existing flooring</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="prep-no" />
                  <Label htmlFor="prep-no">No, subfloor is ready</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {leadData.serviceType === 'door' && (
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium">Door Type</Label>
              <Select 
                value={leadData.doorType || ''} 
                onValueChange={(value) => updateLeadData({ doorType: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select door type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internal">Interior Door</SelectItem>
                  <SelectItem value="external">Exterior/Front Door</SelectItem>
                  <SelectItem value="storm">Storm Door</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Material</Label>
              <Select 
                value={leadData.doorMaterial || ''} 
                onValueChange={(value) => updateLeadData({ doorMaterial: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wood">Wood</SelectItem>
                  <SelectItem value="fiberglass">Fiberglass</SelectItem>
                  <SelectItem value="steel">Steel</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium">Number of Doors</Label>
              <RadioGroup 
                value={leadData.doorQuantity || ''} 
                onValueChange={(value) => updateLeadData({ doorQuantity: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single-door" />
                  <Label htmlFor="single-door">Single Door</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multiple" id="multiple-doors" />
                  <Label htmlFor="multiple-doors">Multiple Doors</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
      </div>

      {/* Panel 2: Image */}
      <div className="md:col-span-1 animate-fade-in min-h-full">
        <Card className="h-full overflow-hidden shadow-medium">
          <img 
            src={getImage()}
            alt={getImageAlt()}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </Card>
      </div>

      {/* Panel 3: Information */}
      <div className="md:col-span-1 animate-slide-in-right min-h-full">
        <Card className="h-full p-6 bg-gradient-subtle border-0 shadow-soft">
          <div className="space-y-4">
            {leadData.serviceType === 'flooring' && leadData.flooringType && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  {leadData.flooringType.charAt(0).toUpperCase() + leadData.flooringType.slice(1)} Flooring
                </h3>
                <div className="space-y-3 text-sm">
                  {leadData.flooringType === 'hardwood' && (
                    <>
                      <p><span className="font-medium">Durability:</span> 25-100+ years with proper care</p>
                      <p><span className="font-medium">Style:</span> Timeless, elegant, increases home value</p>
                      <p><span className="font-medium">Maintenance:</span> Regular cleaning, periodic refinishing</p>
                    </>
                  )}
                  {leadData.flooringType === 'tile' && (
                    <>
                      <p><span className="font-medium">Durability:</span> Extremely durable, water-resistant</p>
                      <p><span className="font-medium">Style:</span> Versatile designs, great for kitchens/baths</p>
                      <p><span className="font-medium">Maintenance:</span> Easy to clean, stain-resistant</p>
                    </>
                  )}
                  {leadData.flooringType === 'laminate' && (
                    <>
                      <p><span className="font-medium">Durability:</span> 15-25 years, scratch-resistant</p>
                      <p><span className="font-medium">Style:</span> Wood-look at lower cost</p>
                      <p><span className="font-medium">Maintenance:</span> Simple cleaning, no refinishing</p>
                    </>
                  )}
                  {(leadData.flooringType === 'vinyl' || leadData.flooringType === 'carpet') && (
                    <>
                      <p><span className="font-medium">Comfort:</span> Soft underfoot, good insulation</p>
                      <p><span className="font-medium">Cost:</span> Budget-friendly option</p>
                      <p><span className="font-medium">Installation:</span> Quick installation process</p>
                    </>
                  )}
                </div>

                {leadData.flooringArea && (
                  <div className="pt-4 border-t">
                    <p className="text-sm"><span className="font-medium">Estimated area:</span> {leadData.flooringArea} sq ft</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Final measurements will be confirmed during site visit
                    </p>
                  </div>
                )}
              </>
            )}

            {leadData.serviceType === 'door' && leadData.doorType && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  {leadData.doorType.charAt(0).toUpperCase() + leadData.doorType.slice(1)} Door
                </h3>
                <div className="space-y-3 text-sm">
                  {leadData.doorType === 'external' && (
                    <>
                      <p><span className="font-medium">Security:</span> Enhanced locks, reinforced frame</p>
                      <p><span className="font-medium">Weather:</span> Weatherstripping, energy efficient</p>
                      <p><span className="font-medium">Style:</span> Curb appeal, various designs</p>
                    </>
                  )}
                  {leadData.doorType === 'internal' && (
                    <>
                      <p><span className="font-medium">Privacy:</span> Solid core or hollow options</p>
                      <p><span className="font-medium">Style:</span> Match interior design themes</p>
                      <p><span className="font-medium">Function:</span> Proper fit, smooth operation</p>
                    </>
                  )}
                  {leadData.doorType === 'storm' && (
                    <>
                      <p><span className="font-medium">Protection:</span> Weather and wind resistance</p>
                      <p><span className="font-medium">Ventilation:</span> Screen options for airflow</p>
                      <p><span className="font-medium">Energy:</span> Additional insulation layer</p>
                    </>
                  )}
                </div>

                {leadData.doorMaterial && (
                  <div className="pt-4 border-t">
                    <p className="text-sm"><span className="font-medium">Material:</span> {leadData.doorMaterial.charAt(0).toUpperCase() + leadData.doorMaterial.slice(1)}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Professional installation with warranty included
                    </p>
                  </div>
                )}
              </>
            )}

            {(!leadData.flooringType && leadData.serviceType === 'flooring') || (!leadData.doorType && leadData.serviceType === 'door') && (
              <>
                <h3 className="text-xl font-semibold text-text-dark">
                  Project Details
                </h3>
                <p className="text-muted-foreground">
                  Please select your specific requirements to see detailed information and accurate pricing.
                </p>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
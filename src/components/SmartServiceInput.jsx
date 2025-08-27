import React, { useState, useEffect } from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Card } from '@/components/ui/card';
import { Search, Home, DoorOpen } from 'lucide-react';

const serviceOptions = [
  {
    id: 'flooring-replace',
    label: 'Replace Flooring',
    description: 'Update existing floors with new materials',
    keywords: ['flooring', 'floor', 'replace', 'update', 'hardwood', 'tile', 'laminate', 'vinyl', 'carpet'],
    icon: <Home className="h-5 w-5" />,
    serviceType: 'flooring',
    projectGoal: 'replace'
  },
  {
    id: 'flooring-new',
    label: 'New Flooring Installation',
    description: 'Install floors in new construction or bare areas',
    keywords: ['flooring', 'floor', 'new', 'install', 'construction', 'addition'],
    icon: <Home className="h-5 w-5" />,
    serviceType: 'flooring',
    projectGoal: 'new'
  },
  {
    id: 'flooring-repair',
    label: 'Floor Repair',
    description: 'Fix damaged or worn flooring sections',
    keywords: ['flooring', 'floor', 'repair', 'fix', 'damage', 'scratch', 'worn'],
    icon: <Home className="h-5 w-5" />,
    serviceType: 'flooring',
    projectGoal: 'repair'
  },
  {
    id: 'door-replace',
    label: 'Replace Doors',
    description: 'Update existing interior or exterior doors',
    keywords: ['door', 'doors', 'replace', 'update', 'interior', 'exterior', 'entry'],
    icon: <DoorOpen className="h-5 w-5" />,
    serviceType: 'door',
    projectGoal: 'replace'
  },
  {
    id: 'door-new',
    label: 'New Door Installation',
    description: 'Install doors in new openings or construction',
    keywords: ['door', 'doors', 'new', 'install', 'opening', 'construction'],
    icon: <DoorOpen className="h-5 w-5" />,
    serviceType: 'door',
    projectGoal: 'new'
  },
  {
    id: 'door-repair',
    label: 'Door Repair',
    description: 'Fix damaged doors, frames, or hardware',
    keywords: ['door', 'doors', 'repair', 'fix', 'hardware', 'frame', 'hinge'],
    icon: <DoorOpen className="h-5 w-5" />,
    serviceType: 'door',
    projectGoal: 'repair'
  }
];

export const SmartServiceInput = ({ onServiceSelect, selectedService, onSearchClear }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredOptions([]);
      // Call reset function when search is cleared
      if (onSearchClear) {
        onSearchClear();
      }
      return;
    }

    const filtered = serviceOptions.filter(option => 
      option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
      option.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      option.keywords.some(keyword => keyword.toLowerCase().includes(searchValue.toLowerCase()))
    );

    setFilteredOptions(filtered);
  }, [searchValue, onSearchClear]);

  const handleSelect = (option) => {
    onServiceSelect(option.serviceType, option.projectGoal);
    setSearchValue(option.label);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-lowes-navy rounded-full shadow-soft mb-4 animate-scale-in">
          <Search className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          What can we help you with?
        </h2>
        <p className="text-muted-foreground">
          Start typing your project needs - we'll show you the best options
        </p>
      </div>

      <Card className="shadow-large overflow-hidden border-2 hover:border-lowes-blue/30 transition-all duration-300 ease-anticipate hover:shadow-medium">
        <Command 
          className="rounded-lg border-0" 
          shouldFilter={false}
        >
          <CommandInput
            placeholder="Type your project... (e.g., 'replace hardwood floors', 'install new doors')"
            value={searchValue}
            onValueChange={(value) => {
              setSearchValue(value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              // Small delay to allow for dropdown item clicks
              setTimeout(() => setIsOpen(false), 150);
            }}
            className="h-14 text-lg border-0 focus:outline-none transition-all duration-200"
          />
          
          {isOpen && (
            <CommandList className="max-h-80 animate-smooth-height-in">
              <CommandEmpty className="py-6 text-center text-muted-foreground">
                <div className="flex flex-col items-center animate-scale-in">
                  <Search className="h-8 w-8 mb-2 opacity-50" />
                  <p>No services found matching "{searchValue}"</p>
                  <p className="text-sm mt-1">Try "flooring", "doors", or describe your project</p>
                </div>
              </CommandEmpty>
              
              {filteredOptions.length > 0 && (
                <CommandGroup>
                  {filteredOptions.map((option, index) => (
                    <CommandItem
                      key={option.id}
                      value={option.id}
                      onSelect={() => handleSelect(option)}
                      className="flex items-start gap-3 p-4 hover:bg-lowes-blue/5 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-soft border border-transparent hover:border-lowes-blue/10 rounded-lg group"
                      style={{ 
                        '--entrance-delay': `${index * 0.05}s`,
                        animation: 'panel-entrance 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) var(--entrance-delay) both'
                      }}
                    >
                      <div className="flex-shrink-0 p-2 bg-lowes-blue/10 rounded-lg group-hover:bg-lowes-blue/20 group-hover:scale-110 transition-all duration-200">
                        {option.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-foreground group-hover:text-lowes-blue transition-colors duration-200">
                          {option.label}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors duration-200">
                          {option.description}
                        </div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                        <div className="w-2 h-2 bg-lowes-blue rounded-full"></div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          )}
        </Command>
      </Card>
    </div>
  );
};
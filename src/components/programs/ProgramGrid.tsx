import React from 'react';
import { ProgramCard } from './ProgramCard';
import type { Program } from '../../types/programs';

interface ProgramGridProps {
  programs: Program[];
}

export const ProgramGrid = ({ programs }: ProgramGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <ProgramCard key={program.title} {...program} />
      ))}
    </div>
  );
};
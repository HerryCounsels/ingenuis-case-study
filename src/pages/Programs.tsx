import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ProgramFilters } from '../components/programs/ProgramFilters';
import { ProgramGrid } from '../components/programs/ProgramGrid';
import { programs as initialPrograms } from '../data/programsData';

export const Programs = () => {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredPrograms = useMemo(() => {
    let result = [...initialPrograms];
    
    if (category) {
      result = result.filter(program => program.category === category);
    }

    switch (sortBy) {
      case 'newest':
        return result.sort((a, b) => b.students - a.students);
      case 'rating':
        return result.sort((a, b) => b.rating - a.rating);
      default:
        return result;
    }
  }, [category, sortBy]);

  return (
    <div className="p-8">
      <PageHeader 
        title="Available Programs" 
        subtitle="Explore our professional development courses"
      />
      
      <div className="flex justify-between items-center mb-8">
        <ProgramFilters 
          onCategoryChange={setCategory}
          onSortChange={setSortBy}
        />
      </div>

      <ProgramGrid programs={filteredPrograms} />
    </div>
  );
};
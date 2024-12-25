import React from 'react';
import type { ProgramFilterProps } from '../../types/programs';

export const ProgramFilters = ({ onCategoryChange, onSortChange }: ProgramFilterProps) => {
  return (
    <div className="flex space-x-4">
      <select 
        className="px-4 py-2 border rounded-lg"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Workplace">Workplace</option>
        <option value="Professional">Professional</option>
      </select>
      <select 
        className="px-4 py-2 border rounded-lg"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="popular">Sort by Popular</option>
        <option value="newest">Sort by Newest</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  );
};
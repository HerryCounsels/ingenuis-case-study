export interface Program {
  title: string;
  category: string;
  students: number;
  rating: number;
  duration: string;
  image: string;
}

export interface ProgramFilterProps {
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}
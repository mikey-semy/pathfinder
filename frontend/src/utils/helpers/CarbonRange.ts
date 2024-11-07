export const parseCarbonRange = (value: string): { min: number; max: number } => {
    const [min, max] = value.split('-').map(Number);
    return { min, max };
  };
  
import { Clock, DollarSign } from 'lucide-react';

interface BadgeProps {
  type: 'risk' | 'difficulty' | 'time' | 'cost';
  value: string;
}

export function Badge({ type, value }: BadgeProps) {
  const getBadgeStyles = () => {
    switch (type) {
      case 'risk':
        if (value.toLowerCase() === 'low') {
          return 'bg-green-100 text-green-800';
        } else if (value.toLowerCase() === 'medium') {
          return 'bg-yellow-100 text-yellow-800';
        } else {
          return 'bg-red-100 text-red-800';
        }
      case 'difficulty':
        if (value.toLowerCase() === 'easy') {
          return 'bg-gray-100 text-gray-800';
        } else if (value.toLowerCase() === 'medium') {
          return 'bg-blue-100 text-blue-800';
        } else {
          return 'bg-purple-100 text-purple-800';
        }
      case 'time':
        return 'bg-blue-100 text-blue-800';
      case 'cost':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'time':
        return <Clock className="w-3 h-3 mr-1" />;
      case 'cost':
        return <DollarSign className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyles()}`}>
      {getIcon()}
      {value}
    </span>
  );
}

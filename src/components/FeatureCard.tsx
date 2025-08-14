import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  onClick, 
  variant = 'default',
  className = '',
  style
}: FeatureCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'border-primary/20 bg-gradient-primary/5 hover:bg-gradient-primary/10';
      case 'secondary':
        return 'border-secondary/20 bg-gradient-secondary/5 hover:bg-gradient-secondary/10';
      default:
        return 'hover:border-primary/30';
    }
  };

  return (
    <Card className={`card-medical ${getVariantStyles()} ${className}`} style={style}>
      <div className="p-6 space-y-4">
        <div className={`inline-flex p-3 rounded-xl ${
          variant === 'primary' ? 'bg-gradient-primary text-primary-foreground' :
          variant === 'secondary' ? 'bg-gradient-secondary text-secondary-foreground' :
          'bg-muted text-muted-foreground'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        {action && onClick && (
          <Button 
            onClick={onClick}
            variant={variant === 'primary' ? 'default' : variant === 'secondary' ? 'secondary' : 'outline'}
            className="w-full mt-4 transition-all duration-300 hover:scale-105"
          >
            {action}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default FeatureCard;
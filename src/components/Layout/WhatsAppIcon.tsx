import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

/*
  WhatsApp Integration Component for RSI Chicory
  - Direct WhatsApp chat for quick B2B inquiries
  - Always visible for immediate business contact
  - Opens WhatsApp with pre-filled message for sales team
*/

interface WhatsAppIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  className = '',
  size = 'md',
  showText = false 
}) => {
  const phoneNumber = '+919810550456'; // RSI Chicory WhatsApp number
  const message = encodeURIComponent(
    'Hello RSI Chicory! I am interested in your chicory products and would like to discuss bulk pricing and MOQ. Please provide details about your current product range.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <Button
      onClick={handleClick}
      variant="success"
      size={showText ? 'default' : 'icon'}
      className={`${showText ? '' : sizeClasses[size]} ${className} hover:scale-105 transition-transform`}
      title="Chat with RSI Chicory Sales Team on WhatsApp"
    >
      <MessageCircle className={iconSizes[size]} />
      {showText && <span className="ml-2">WhatsApp</span>}
    </Button>
  );
};
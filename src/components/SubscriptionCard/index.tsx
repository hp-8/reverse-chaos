import React, { useRef, useCallback } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './styles.css';

export const SubscriptionCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glossyEffect = card.querySelector('::before') as HTMLElement;
    if (glossyEffect) {
      glossyEffect.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    const glossyEffect = card.querySelector('::before') as HTMLElement;
    if (glossyEffect) {
      glossyEffect.style.transform = 'translate(-50%, -50%) scale(0)';
    }
  }, []);

  return (
    <div className="card-container" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="card-header-text">
        Setting expectations is important. We work on a subscription basis, like a SaaS. 
        You're one step away from reversing your chaos.
      </div>
      <div className="card-section">
        <h1 className="card-title">
          Monthly Design Subscription 
        </h1><br/>
        <h1>
          <AttachMoneyIcon/>
          4,999
        </h1>
        <div className='features-container'>
          <div className='features'>
            <ul><CheckCircleIcon/> One-time only 30 min call</ul>
            <ul><CheckCircleIcon/>No meetings or contracts </ul>
            <ul><CheckCircleIcon/>One Trello board</ul>
            <ul><CheckCircleIcon/> Simple monthly fee</ul> 
          </div>
          <div className='features'>
            <ul><CheckCircleIcon/>Cancel anytime</ul>
            <ul><CheckCircleIcon/>Pause and Resume anytime</ul>
            <ul><CheckCircleIcon/>Unlimited requests</ul>
            <ul><CheckCircleIcon/>Unlimited revisions</ul> 
          </div>
        </div>
        <div className="buttons">
          <button className="btn-black">Get Started</button>
          <button className="btn-trans">Book a 30 min Call</button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  // null means “not yet mounted / timer not started”
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    // compute ms until today 18:00
    const getRemaining = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(18, 0, 0, 0); // today at 18:00:00
      return Math.max(0, target.getTime() - now.getTime());
    };

    // initialize and start ticking
    setTimeLeft(getRemaining());
    const id = setInterval(() => {
      setTimeLeft(getRemaining());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // While mounting (timeLeft===null) or when expired, render nothing
  if (timeLeft === null || timeLeft <= 0) {
    return null;
  }

  // compute H:M:S
  const hours   = Math.floor(timeLeft / 3_600_000);
  const minutes = Math.floor((timeLeft % 3_600_000) / 60_000);
  const seconds = Math.floor((timeLeft % 60_000) / 1000);

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  return (
    <div className="countdown-timer">
      Release in {hh}:{mm}:{ss}
    </div>
  );
}

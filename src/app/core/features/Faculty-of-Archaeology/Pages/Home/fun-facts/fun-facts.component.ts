import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Fact {
  id: number;
  icon: string;
  count: number;
  label: string;
  currentCount: number;
}

@Component({
  selector: 'app-fun-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-facts.component.html',
  styleUrls: ['./fun-facts.component.css']
})
export class FunFactsComponent implements OnInit, OnDestroy {
  private animationStarted = false;
  private observer?: IntersectionObserver;

  facts: Fact[] = [
    {
      id: 1,
      icon: 'pi pi-users',
      count: 850,
      label: 'طلاب مسجلين',
      currentCount: 0
    },
    {
      id: 2,
      icon: 'pi pi-trophy',
      count: 45,
      label: 'جوائز فوز',
      currentCount: 0
    },
    {
      id: 3,
      icon: 'pi pi-graduation-cap',
      count: 38,
      label: 'أساتذة متخصصون',
      currentCount: 0
    },
    {
      id: 4,
      icon: 'pi pi-globe',
      count: 12,
      label: 'لغات تُدرّس',
      currentCount: 0
    }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animationStarted = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.5 });

    const element = document.querySelector('.fun-facts');
    if (element) {
      this.observer.observe(element);
    }
  }

  private animateCounters() {
    this.facts.forEach(fact => {
      this.animateCounter(fact);
    });
  }

  private animateCounter(fact: Fact) {
    const duration = 2000; // 2 ثوانٍ
    const steps = 60;
    const increment = fact.count / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      fact.currentCount = Math.min(Math.floor(increment * currentStep), fact.count);
      
      if (currentStep >= steps) {
        fact.currentCount = fact.count;
        clearInterval(timer);
      }
    }, stepDuration);
  }
}
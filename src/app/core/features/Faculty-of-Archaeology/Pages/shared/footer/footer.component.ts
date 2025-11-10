import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  url: string;
}

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks: FooterLink[] = [
    { label: 'عن الكلية', url: '/about' },
    { label: 'التاريخ', url: '/history' },
    { label: 'الأقسام', url: '/departments' },
    { label: 'الفعاليات', url: '/events' },
    { label: 'اتصل بنا', url: '/contact' }
  ];

  contactInfo = {
    address: 'الأقصر، مصر',
    phone: '+20 123 456 789',
    email: 'info@arch.luxor.edu.eg'
  };

  socialLinks: SocialLink[] = [
    { icon: 'pi pi-facebook', url: '#', label: 'فيسبوك' },
    { icon: 'pi pi-instagram', url: '#', label: 'إنستغرام' },
    { icon: 'pi pi-twitter', url: '#', label: 'تويتر' },
    { icon: 'pi pi-youtube', url: '#', label: 'يوتيوب' }
  ];
}
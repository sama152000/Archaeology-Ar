import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterLink, SocialLink, ContactInfo, FacultyInfo } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private quickLinks: FooterLink[] = [
    { label: 'عن الكلية', url: '/about' },
    { label: 'تاريخ الكلية', url: '/about/history' },
    { label: 'الأقسام العلمية', url: '/departments/1' },
    { label: 'الفعاليات والأنشطة', url: '/posts/events/1' },
    { label: 'اتصل بنا', url: '/contact' }
  ];

  private contactInfo: ContactInfo = {
    address: 'الأقصر - جامعة الأقصر - كلية الآثار',
    phone: '+20 95 238 1000',
    email: 'info@arch.luxor.edu.eg'
  };

  private socialLinks: SocialLink[] = [
    { icon: 'pi pi-facebook', url: '#', label: 'فيسبوك' },
    { icon: 'pi pi-instagram', url: '#', label: 'إنستغرام' },
    { icon: 'pi pi-twitter', url: '#', label: 'تويتر' },
    { icon: 'pi pi-youtube', url: '#', label: 'يوتيوب' }
  ];

  private facultyInfo: FacultyInfo = {
    title: 'كلية الآثار - جامعة الأقصر',
    description: 'نحافظ على أغلى تراث للبشرية ونشاركه مع العالم من خلال التعليم المتميز، والابتكار، واكتشاف المعرفة الأثرية من قلب مدينة الأقصر التاريخية.'
  };

  getQuickLinks(): Observable<FooterLink[]> {
    return of(this.quickLinks);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return of(this.socialLinks);
  }

  getFacultyInfo(): Observable<FacultyInfo> {
    return of(this.facultyInfo);
  }
}
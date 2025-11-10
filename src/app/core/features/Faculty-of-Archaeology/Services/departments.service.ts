import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department, DepartmentSection } from '../model/departments.model';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  private departmentSections: DepartmentSection[] = [
    {
      id: 'about',
      title: 'عن القسم',
      route: 'about',
      icon: 'fas fa-info-circle'
    },
    {
      id: 'staff',
      title: 'أعضاء هيئة التدريس',
      route: 'staff',
      icon: 'fas fa-users'
    },
    {
      id: 'admin',
      title: 'الهيكل الإداري',
      route: 'admin',
      icon: 'fas fa-sitemap'
    }
  ];

  private departments: Department[] = [
    {
      id: 1,
      name: 'قسم علم المصريات',
      slug: 'egyptology',
      description: [
        'يُعد أحد الأقسام الرائدة بكلية الآثار، ويركز على دراسة الحضارة المصرية القديمة — لغتها، تاريخها، فنونها، ديانتها، وثقافتها.',
        'أعضاء هيئة التدريس لدينا خبراء معترف بهم في مجالاتهم، ويتعاونون مع مؤسسات وطنية ودولية لتعزيز توثيق وحفظ كنوز مصر الأثرية.'
      ],
      shortDescription: 'قسم رائد يركز على الحضارة المصرية القديمة، لغتها، تاريخها، فنونها، ديانتها، وثقافتها.',
      image: '/assets/dep1.jpg',
      hod: {
        name: 'أ.د. نورا المصري',
        title: 'رئيس القسم',
        image: '/assets/icon.jpg',
        quote: 'حفظ الماضي لإنارة المستقبل.'
      },
      staff: [
        { name: 'أ.د. أحمد حسن', position: 'أستاذ', email: 'ahmed@arch.edu', image: '/assets/icon.jpg' },
        { name: 'د. سلمى يوسف', position: 'أستاذ مشارك', email: 'salma@arch.edu', image: '/assets/icon.jpg' },
        { name: 'د. محمود علي', position: 'مدرس', email: 'mahmoud@arch.edu', image: '/assets/icon.jpg' },
        { name: 'د. ليلى إبراهيم', position: 'مدرس مساعد', email: 'laila@arch.edu', image: '/assets/icon.jpg' }
      ]
    },
    {
      id: 2,
      name: 'قسم الترميم',
      slug: 'restoration',
      description: [
        'يتخصص قسم الترميم في حفظ وترميم القطع الأثرية، لضمان استمراريتها للأجيال القادمة.',
        'يكتسب الطلاب خبرة عملية باستخدام تقنيات متقدمة في تحليل المواد، أخلاقيات الحفاظ، والحفظ المتحفي.'
      ],
      shortDescription: 'متخصص في حفظ وترميم القطع الأثرية للأجيال القادمة.',
      image: '/assets/dep2.jpg',
      hod: {
        name: 'أ.د. عمر فاروق',
        title: 'رئيس القسم',
        image: '/assets/icon.jpg'
      },
      staff: [
        { name: 'أ.د. فاطمة زكي', position: 'أستاذ', email: 'fatima@arch.edu', image: '/assets/icon.jpg' },
        { name: 'د. يوسف كمال', position: 'أستاذ مشارك', email: 'youssef@arch.edu', image: '/assets/icon.jpg' }
      ]
    },
    {
      id: 3,
      name: 'قسم الآثار الإسلامية',
      slug: 'islamic',
      description: [
        'مكرس لدراسة الفن الإسلامي، العمارة، والثقافة المادية من العصر الإسلامي المبكر وحتى العصر العثماني.',
        'ينفذ القسم مسوحات ميدانية، مشاريع حفريات، وينشر أبحاثًا حول المواقع التراثية الإسلامية في مصر والمنطقة.'
      ],
      shortDescription: 'يدرس الفن الإسلامي، العمارة، والثقافة المادية من العصر الإسلامي المبكر وحتى العثماني.',
      image: '/assets/dep3.jpg',
      hod: {
        name: 'أ.د. عائشة محمود',
        title: 'رئيس القسم',
        image: '/assets/icon.jpg'
      },
      staff: [
        { name: 'أ.د. طارق سالم', position: 'أستاذ', email: 'tarek@arch.edu', image: '/assets/icon.jpg' },
        { name: 'د. هناء مصطفى', position: 'مدرس', email: 'hana@arch.edu', image: '/assets/icon.jpg' }
      ]
    }
  ];

  getDepartmentSections(): Observable<DepartmentSection[]> {
    return of(this.departmentSections);
  }

  getDepartment(id: number): Observable<Department | undefined> {
    return of(this.departments.find(d => d.id === id));
  }

  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }
}
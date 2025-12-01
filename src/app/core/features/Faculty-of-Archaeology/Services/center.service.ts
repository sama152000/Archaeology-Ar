import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Center, CenterSection } from '../model/center.model';

@Injectable({ providedIn: 'root' })
export class CentersService {
  private centerSections: CenterSection[] = [
  {
    id: 'overview',
    title: 'نبذة عن المركز',
    route: 'overview',
    icon: 'fas fa-info-circle'
  },
  {
    id: 'activities',
    title: 'الأنشاطات والبرامج',
    route: 'activities',
    icon: 'fas fa-calendar-alt'
  },
  {
    id: 'contact',
    title: 'بيانات التواصل',
    route: 'contact',
    icon: 'fas fa-phone'
  }
];

  private centers: Center[] = [
    {
      id: 1,
      name: 'مركز التراث الرقمي',
      slug: 'digital-heritage',
      description: [
        'يُعنى مركز التراث الرقمي بتوثيق ورقمنة الآثار والقطع الأثرية باستخدام أحدث التقنيات.',
        'رسالتنا إنشاء أرشيف رقمي شامل يضمن الحفاظ على التراث الثقافي المصري للأجيال القادمة.',
        'نستخدم المسح الثلاثي الأبعاد، والواقع الافتراضي، والتحليل بالذكاء الاصطناعي لتوثيق ودراسة الاكتشافات الأثرية.'
      ],
      shortDescription: 'مركز رائد متخصص في الحفاظ الرقمي على التراث الأثري باستخدام أحدث التقنيات.',
      image: '/assets/center1.jpg',
      director: {
        name: 'د. أمينة الرشيد',
        title: 'مدير المركز',
        image: '/assets/icon.jpg',
        quote: 'ربط حكمة القدماء بتكنولوجيا الحاضر.'
      },
      goals: [
        'رقمنة المجموعات الأثرية',
        'تطوير تجارب المتاحف الافتراضية',
        'تدريب الباحثين على علم الآثار الرقمي',
        'إنشاء أرشيفات إلكترونية متاحة للجميع'
      ],
      activities: [
        'مشاريع التوثيق ثلاثي الأبعاد',
        'معارض الواقع الافتراضي',
        'ورش عمل الترميم الرقمي',
        'منصة النشر الإلكتروني',
        'برامج التعاون الدولي'
      ],
      history: 'تأسس المركز عام 2018، وقد نجح في رقمنة أكثر من 5000 قطعة أثرية، وإطورت معارض افتراضية شاهدتها أكثر من 100 ألف زائر من جميع أنحاء العالم.',
      contactInfo: {
        email: 'digital.heritage@arch.luxor.edu.eg',
        phone: '+20 95 237 1234',
        address: 'مبنى التراث الرقمي - كلية الآثار'
      }
    },
    {
      id: 2,
      name: 'مركز بحوث الحضارات القديمة',
      slug: 'ancient-civilizations',
      description: [
        'يجري مركز بحوث الحضارات القديمة أبحاثًا متعددة التخصصات حول حضارات مصر القديمة ومنطقة البحر المتوسط الأوسع.',
        'يعمل فريق من الباحثين الدوليين على مشاريع تشمل تحليل اللغات القديمة ودراسات الثقافة المادية.',
        'ينشر المركز أبحاثًا علمية محكمة ويستضيف مؤتمرات دولية في دراسات الحضارات القديمة.'
      ],
      shortDescription: 'مركز بحثي متعدد التخصصات يدرس الحضارات المصرية القديمة وحضارات البحر المتوسط.',
      image: '/assets/center2.jpg',
      director: {
        name: 'أ.د. حسن المصري',
        title: 'مدير البحوث',
        image: '/assets/icon.jpg',
        quote: 'كشف أسرار الماضي لفهم المستقبل.'
      },
      goals: [
        'تطوير بحوث الحضارات القديمة',
        'تعزيز التعاون الدولي',
        'نشر دراسات رائدة',
        'إعداد جيل جديد من الباحثين'
      ],
      activities: [
        'مشاريع الحفائر الميدانية',
        'برامج التحليل المعملي',
        'مؤتمرات البحث الدولية',
        'ندوات طلاب الدراسات العليا',
        'سلسلة المحاضرات العامة'
      ],
      history: 'تأسس عام 2015، ونشر أكثر من 200 بحث علمي، واستضاف 15 مؤتمرًا دوليًا، ليصبح من أبرز المؤسسات البحثية في المجال.',
      contactInfo: {
        email: 'research.center@arch.luxor.edu.eg',
        phone: '+20 95 237 5678',
        address: 'مبنى البحوث - الدور الثالث'
      }
    },
    {
      id: 3,
      name: 'مركز تدريب الترميم والصيانة',
      slug: 'conservation-training',
      description: [
        'يقدم مركز تدريب الترميم والصيانة برامج تدريبية مهنية لأخصائي الترميم والمرممين.',
        'نوفر ورش عمل عملية، ودورات شهادات معتمدة، وتعليم مستمر للعاملين في المتاحف.',
        'معاملنا معامل حديثة مجهزة بأحدث تقنيات ومواد الترميم والصيانة.'
      ],
      shortDescription: 'مركز تدريب مهني متخصص لأخصائي الترميم والعاملين في المتاحف.',
      image: '/assets/center3.jpg',
      director: {
        name: 'د. سارة أحمد',
        title: 'مديرة التدريب',
        image: '/assets/icon.jpg',
        quote: 'حفظ التراث بأيدٍ ماهرة وعقول واعية.'
      },
      goals: [
        'تأهيل مرممين محترفين',
        'وضع معايير الترميم',
        'نشر أفضل الممارسات',
        'دعم التطوير المهني'
      ],
      activities: [
        'برامج الشهادات المهنية',
        'ورش عمل الترميم',
        'دورات التدريب التقني',
        'جلسات تدريب على المعدات',
        'برامج التطوير الوظيفي'
      ],
      history: 'أُطلق عام 2020، وقد درّب أكثر من 500 متخصص، وأبرم شراكات مع متاحف في مصر والشرق الأوسط.',
      contactInfo: {
        email: 'training.center@arch.luxor.edu.eg',
        phone: '+20 95 237 9012',
        address: 'مبنى معامل الترميم والصيانة'
      }
    }
  ];

  getCenterSections(): Observable<CenterSection[]> {
    return of(this.centerSections);
  }

  getCenter(id: number): Observable<Center | undefined> {
    return of(this.centers.find(c => c.id === id));
  }

  getCenters(): Observable<Center[]> {
    return of(this.centers);
  }
}
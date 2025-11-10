import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { 
  AboutSection, 
  VisionMission, 
  DeanMessage, 
  Objective, 
  HistoryItem, 
  StrategicPlan, 
  AdministrativeStructure 
} from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutSections: AboutSection[] = [
    { id: 'vision', title: "الرؤية والرسالة", route: '/about/vision', icon: 'pi pi-eye' },
    { id: 'dean-message', title: "كلمة العميد", route: '/about/dean-message', icon: 'pi pi-user' },
    { id: 'history', title: "التاريخ", route: '/about/history', icon: 'pi pi-clock' },
    { id: 'objectives', title: "الأهداف", route: '/about/objectives', icon: 'pi pi-flag' },
    { id: 'administrative', title: "الهيكل الإداري", route: '/about/administrative', icon: 'pi pi-sitemap' },
    { id: 'strategic', title: "الخطة الاستراتيجية", route: '/about/strategic', icon: 'pi pi-chart-line' }
  ];

  private visionMission: VisionMission = {
    vision: {
      title: "رؤيتنا",
      description: "أن نكون مؤسسة أكاديمية رائدة في مجالات الآثار والتراث والدراسات الثقافية — محققين التميز في التعليم، والبحث، وخدمة المجتمع على المستويين الوطني والعالمي.",
      icon: "fa-solid fa-eye"
    },
    mission: {
      title: "رسالتنا", 
      description: "تهدف كلية الآثار إلى إعداد خريجين متميزين قادرين على حفظ وتعزيز التراث الأثري والثقافي الغني لمصر. كما تسعى الكلية إلى تشجيع الابتكار، والبحث، والمشاركة الفعّالة في تطوير المعرفة الأثرية.",
      icon: "fa-solid fa-bullseye"
    }
  };

  private deanMessage: DeanMessage = {
    name: "أ.د. خالد عبد النعيم محمدين",
    title: "عميد الكلية",
    image: "./assets/dean.png",
    message: [
      "أبنائي الطلاب بكلية الآثار، جامعة الأقصر، مع بدايات جديدة لكليتنا المتميزة، أتقدم إليكم، نيابة عن نفسي... وتنفيذًا لتوجيهات معالي الأستاذة الدكتورة، رئيسة جامعة الأقصر... وبالتعاون مع شركائنا في النجاح من نواب الكلية، ورؤساء الأقسام العلمية، وأعضاء هيئة التدريس، والهيئة المعاونة، والجهاز الإداري، واتحاد طلاب الكلية.",
      "تحية صادقة وأطيب التمنيات بأن يكون عامكم الدراسي الجديد عامًا مليئًا بالنشاط والحيوية، وتحقيق أعلى الدرجات. فلتكن دراستكم في الكلية مثمرة، ناجحة، ومليئة بالذكريات السعيدة. أبنائي الطلاب، شباب مصر الواعد، أحثكم على الجدية في الدراسة والتعلّم، واستغلال الوقت على أكمل وجه، سواء في الدراسة أو الأنشطة الطلابية.",
      "الأنشطة الطلابية بكل تنوعها الثقافي والرياضي والاجتماعي، تُصقل خبراتكم، تُوسع آفاقكم، وتمنحكم فرصة التعرف والتفاعل مع زملائكم داخل كليتكم أو من كليات أخرى.",
      "أبنائي الطلاب، قبل أن تكون الجامعة مكانًا لاكتساب المعرفة، هي مكان لتنمية العقول، وصقل الأخلاق، وبناء الشخصية. لذا أرجو أن تستغلوا سنوات دراستكم الجامعية في تعميق الحوار، واستمرار الصداقات، والتعاون البنّاء مع زملائكم وأساتذتكم في كل الموضوعات الأكاديمية والحياتية والاجتماعية.",
      "أبنائي الطلاب، أعدكم بتقديم كل الدعم الممكن لحل جميع المشكلات ومواجهة أي صعوبات قد تواجهكم داخل الكلية. وأتوقع منكم الكثير من الاجتهاد والانضباط والطاقة. نحن كإداريين وأكاديميين ومربين، سنكون سعداء جدًا بنهاية العام الدراسي، وقد حققنا معًا، ومعكم، كل ما نطمح إليه.",
      "أبنائي الطلاب، أمل المستقبل وروح الحاضر. أنتم جيل المستقبل لمصرنا الحبيبة. أنتم من سيحمل مسؤولية العمل المهني والمجتمعي والوطني. أنتم أبناء حضارة عظيمة تمتد لأكثر من 7000 عام، وعليكم السير في طريق رفعة مصرنا الحبيبة وتقدمها ورؤيتها لمستقبلها بين الأمم.",
      "نحث أنفسنا وإياكم على المشاركة وتقوية روح الانتماء والمشاعر الوطنية من خلال الفعاليات والمواقف والمناسبات الوطنية والمجتمعية التي ستعيشونها داخل كليتكم وجامعتكم المتميزة. أبنائي الطلاب، نلتقي على طريق الخير، نسعى للهداية، ونلتقي في حب مصر. داخل كليتكم وجامعتكم، نتوقع منكم الكثير من العطاء والوفاء. نثق في التزامكم بعهود العمل والحياة الجامعية."
    ],
    signature: "مع أطيب التحيات،\nأ.د. خالد عبد النعيم محمدين\nعميد الكلية"
  };

  private objectives: Objective[] = [
    {
      id: '1',
      title: "التميز الأكاديمي",
      description: "تقديم تعليم عالي الجودة في الآثار ودراسات التراث، وإعداد خريجين مؤهلين لمهن ناجحة في المجال.",
      icon: "pi pi-graduation-cap"
    },
    {
      id: '2', 
      title: "الابتكار البحثي",
      description: "إجراء بحوث متطورة في علوم الآثار، مساهمة في فهم عالمي للحضارات القديمة.",
      icon: "pi pi-search"
    },
    {
      id: '3',
      title: "حفظ التراث",
      description: "حفظ وحماية التراث الأثري الغني لمصر للأجيال القادمة من خلال الطرق العلمية والمشاركة المجتمعية.",
      icon: "pi pi-shield"
    },
    {
      id: '4',
      title: "خدمة المجتمع",
      description: "خدمة المجتمع المحلي والدولي من خلال الخبرة الأثرية، والبرامج الثقافية، والتوعية التعليمية.",
      icon: "pi pi-users"
    },
    {
      id: '5',
      title: "التعاون الدولي",
      description: "تعزيز الشراكات مع المؤسسات الدولية لتطوير المعرفة الأثرية والتبادل الثقافي.",
      icon: "pi pi-globe"
    },
    {
      id: '6',
      title: "التكامل التكنولوجي",
      description: "دمج التكنولوجيا الحديثة والطرق الرقمية في البحث الأثري وتوثيق التراث.",
      icon: "pi pi-desktop"
    }
  ];

  private history: HistoryItem[] = [
    {
      year: "2019",
      title: "تأسيس الكلية",
      description: "تأسست كلية الآثار كجزء من جامعة الأقصر، مُبشرة بعصر جديد في تعليم الآثار بصعيد مصر.",
      image: "assets/history-1.jpg"
    },
    {
      year: "2020",
      title: "إطلاق البرامج الأكاديمية الأولى",
      description: "إطلاق برامج البكالوريوس في علم المصريات، والآثار الإسلامية، والحفظ والترميم.",
      image: "assets/history-2.jpg"
    },
    {
      year: "2021",
      title: "افتتاح مركز البحوث",
      description: "افتتاح مركز البحوث الأثرية مزودًا بأحدث المعامل والمعدات.",
      image: "assets/history-3.jpg"
    },
    {
      year: "2022",
      title: "الشراكات الدولية",
      description: "إقامة شراكات مع جامعات دولية رائدة ومؤسسات أثرية عالمية.",
      image: "assets/history-4.jpg"
    },
    {
      year: "2023",
      title: "إطلاق برامج الدراسات العليا",
      description: "إدخال برامج الماجستير والدكتوراه في تخصصات أثرية متنوعة.",
      image: "assets/history-5.jpg"
    },
    {
      year: "2024",
      title: "مشروع الأرشيف الرقمي",
      description: "إطلاق مشروع الأرشيف الرقمي الشامل لتوثيق التراث الأثري في الأقصر.",
      image: "assets/history-6.jpg"
    }
  ];

  private strategicPlan: StrategicPlan = {
    title: "الخطة الاستراتيجية 2024-2030",
    description: "تُرسم خطتنا الاستراتيجية الشاملة رؤية الكلية للسنوات الست القادمة، مع التركيز على التميز الأكاديمي، والابتكار البحثي، والمشاركة المجتمعية.",
    timeline: "2024-2030",
    goals: [
      {
        id: '1',
        title: "التميز الأكاديمي",
        description: "تعزيز جودة التعليم والبرامج الأكاديمية",
        targets: [
          "الحصول على الاعتماد الدولي لجميع البرامج",
          "رفع معدلات رضا الطلاب إلى 95%",
          "تطوير 3 برامج متخصصة جديدة",
          "إنشاء برامج تبادل مع 10 جامعات دولية"
        ],
        icon: "pi pi-star"
      },
      {
        id: '2',
        title: "الريادة البحثية",
        description: "أن نصبح مركزًا رائدًا للبحوث الأثرية",
        targets: [
          "نشر أكثر من 100 بحث علمي سنويًا",
          "الحصول على 20 منحة بحثية كبرى",
          "إنشاء 5 مراكز بحثية جديدة",
          "استضافة مؤتمرين دوليين سنويًا"
        ],
        icon: "pi pi-search"
      },
      {
        id: '3',
        title: "تطوير البنية التحتية",
        description: "تحديث المرافق والقدرات التكنولوجية",
        targets: [
          "بناء مجمع معامل أثرية جديد",
          "إنشاء مركز توثيق رقمي",
          "تحديث المكتبة وأنظمة المعلومات",
          "إنشاء مساحات تعليمية بالواقع الافتراضي"
        ],
        icon: "pi pi-building"
      },
      {
        id: '4',
        title: "المشاركة المجتمعية",
        description: "تعزيز الروابط مع المجتمعات المحلية والدولية",
        targets: [
          "إطلاق برامج آثار مجتمعية",
          "إنشاء مراكز تراث مجتمعية",
          "تطوير مبادرات السياحة الثقافية",
          "إنشاء برامج توعية تعليمية"
        ],
        icon: "pi pi-users"
      }
    ]
  };

  private administrativeStructure: AdministrativeStructure = {
    dean: {
      id: 'dean',
      name: "أ.د. خالد عبد النعيم محمدين",
      title: "عميد الكلية",
      image: "assets/dean.png",
      email: "dean@arch.luxor.edu.eg",
      office: "مبنى الإدارة - الدور الثالث",
      description: "يقود الكلية بخبرة تزيد عن 20 عامًا في البحث الأثري والإدارة الأكاديمية."
    },
    viceDeans: [
      {
        id: 'vice-dean-academic',
        name: "أ.د. أميرة حسن محمد",
        title: "نائب العميد لشؤون التعليم والطلاب",
        image: "assets/vice-dean-1.jpg",
        email: "academic@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الثاني"
      },
      {
        id: 'vice-dean-postgrad',
        name: "أ.د. أحمد محمود علي",
        title: "نائب العميد للدراسات العليا والبحوث",
        image: "assets/vice-dean-2.jpg", 
        email: "postgrad@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الثاني"
      },
      {
        id: 'vice-dean-community',
        name: "د. فاطمة إبراهيم",
        title: "نائب العميد لخدمة المجتمع وتنمية البيئة",
        image: "assets/vice-dean-3.jpg",
        email: "community@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الأول"
      }
    ],
    departmentHeads: [
      {
        id: 'head-egyptology',
        name: "أ.د. محمد صالح",
        title: "رئيس قسم علم المصريات",
        image: "assets/head-1.jpg",
        email: "egyptology@arch.luxor.edu.eg",
        office: "مبنى علم المصريات - الدور الثاني"
      },
      {
        id: 'head-islamic',
        name: "أ.د. نادية فاروق",
        title: "رئيس قسم الآثار الإسلامية", 
        image: "assets/head-2.jpg",
        email: "islamic@arch.luxor.edu.eg",
        office: "مبنى الدراسات الإسلامية - الدور الثالث"
      },
      {
        id: 'head-restoration',
        name: "د. هاني مصطفى",
        title: "رئيس قسم الترميم",
        image: "assets/head-3.jpg",
        email: "restoration@arch.luxor.edu.eg",
        office: "مبنى معامل الحفظ - الدور الأول"
      }
    ]
  };

  getAboutSections(): Observable<AboutSection[]> {
    return of(this.aboutSections);
  }

  getVisionMission(): Observable<VisionMission> {
    return of(this.visionMission);
  }

  getDeanMessage(): Observable<DeanMessage> {
    return of(this.deanMessage);
  }

  getObjectives(): Observable<Objective[]> {
    return of(this.objectives);
  }

  getHistory(): Observable<HistoryItem[]> {
    return of(this.history);
  }

  getStrategicPlan(): Observable<StrategicPlan> {
    return of(this.strategicPlan);
  }

  getAdministrativeStructure(): Observable<AdministrativeStructure> {
    return of(this.administrativeStructure);
  }
}
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
    { id: 'history', title: "تاريخ الكلية", route: '/about/history', icon: 'pi pi-clock' },
    { id: 'objectives', title: "الأهداف", route: '/about/objectives', icon: 'pi pi-flag' },
    { id: 'administrative', title: "الهيكل الإداري", route: '/about/administrative', icon: 'pi pi-sitemap' },
    { id: 'strategic', title: "الخطة الاستراتيجية", route: '/about/strategic', icon: 'pi pi-chart-line' }
  ];

  private visionMission: VisionMission = {
    vision: {
      title: "رؤيتنا",
      description: "أن نكون مؤسسة أكاديمية رائدة في مجال الآثار والتراث والدراسات الثقافية، نحقق التميز في التعليم والبحث العلمي وخدمة المجتمع على المستويين المحلي والعالمي.",
      icon: "fa-solid fa-eye"
    },
    mission: {
      title: "رسالتنا", 
      description: "تسعى كلية الآثار إلى إعداد خريجين متميزين قادرين على حفظ وتعزيز التراث الأثري والثقافي المصري العريق، كما تسعى إلى تشجيع الإبداع والبحث العلمي والمشاركة الفعالة في تطوير المعرفة الأثرية.",
      icon: "fa-solid fa-bullseye"
    }
  };

  private deanMessage: DeanMessage = {
    name: "أ.د. خالد عبد النعيم محمدين",
    title: "عميد الكلية",
    image: "./assets/dean.png",
    message: [
      "أبنائي وبناتي طلاب كلية الآثار بجامعة الأقصر، مع بدايات جديدة لكليتنا الموقرة، أتقدم إليكم بتحية حارة مني شخصيًا... وتنفيذًا لتوجيهات ومشاعر كريمة ورعاية حانية من سيادت الأستاذة الدكتورة رئيس جامعة الأقصر... وبالتعاون مع شركائنا في النجاح من السادة الوكلاء ورؤساء الأقسام العلمية وأعضاء هيئة التدريس والهيئة المعاونة والجهاز الإداري واتحاد طلاب الكلية.",
      "تحية صادقة وأطيب تمنياتي بأن يكون عامكم الدراسي الجديد عام نشاط وحيوية، وأن تحققوا أعلى الدرجات، وأن تكون دراستكم بالكلية مثمرة وناجحة ومليئة بذكريات سعيدة. أبنائي الطلاب شباب مصر الواعد، أحثكم على الجد والاجتهاد في دراستكم وتحصيلكم العلمي واستغلال أوقاتكم خير استغلال سواء في الدراسة أو في الأنشطة الطلابية.",
      "فالأنشطة الطلابية بكل تنوعها الثقافي والرياضي والاجتماعي تصقل خبراتكم وتوسع آفاقكم وتمنحكم فرصة التعرف والتفاعل مع زملائكم داخل الكلية أو من الكليات الأخرى.",
      "أبنائي الطلاب، الجامعة قبل أن تكون مكانًا لاكتساب العلم هي مكان لتهذيب العقول وصقل الأخلاق والشخصية، لذا أرجو أن تستغلوا سنوات دراستكم الجامعية في تعميق الحوار واستمرار الصداقات والتعاون المثمر مع زملائكم وأساتذتكم في كل الموضوعات الأكاديمية والحياتية والاجتماعية.",
      "أبنائي الطلاب، أعدكم بأن نوفر لكم كل الدعم الممكن لحل أي مشكلات ومواجهة أي صعوبات قد تواجهكم داخل الكلية، وأتوقع منكم بدوركم كثيرًا من الجد والانضباط والحيوية. نحن كإدارة وأساتذة ومربين سنكون سعداء جدًا عندما ينتهي العام الدراسي وقد حققنا معًا كل ما نتمناه.",
      "أبنائي الطلاب أمل المستقبل وروح الحاضر، أنتم جيل المستقبل لمصرنا الحبيبة، أنتم من سيحمل مسؤولية العمل المهني والمجتمعي والوطني، أنتم أبناء حضارة عظيمة تمتد لأكثر من 7000 عام، ومن ثم فأنتم مدعوون لسلوك الطريق الذي يضع مصرنا الحبيبة في مقدمة الأمم وفي الريادة ورؤية مستقبلها.",
      "نحث أنفسنا وإياكم على المشاركة وتعزيز روح الانتماء والمشاعر الوطنية من خلال المناسبات والأحداث الوطنية والمجتمعية التي ستعيشونها داخل كليتكم وجامعتكم الموقرة. أبنائي الطلاب نلتقي على طريق الخير، نسعى للهداية، ونلتقي في حب مصر. داخل كليتكم وجامعتكم نتوقع منكم كثيرًا من العطاء والولاء، ونثق في التزامكم بعهود العمل والحياة الجامعية."
    ],
    signature: "وتفضلوا بقبول فائق الاحترام والتقدير\nأ.د. خالد عبد النعيم محمدين\nعميد الكلية"
  };

  private objectives: Objective[] = [
    {
      id: '1',
      title: "التميز الأكاديمي",
      description: "توفير تعليم عالي الجودة في مجال الآثار ودراسات التراث، وإعداد خريجين مؤهلين لسوق العمل بنجاح.",
      icon: "pi pi-graduation-cap"
    },
    {
      id: '2', 
      title: "الابتكار البحثي",
      description: "إجراء بحوث رائدة في علوم الآثار، والإسهام في فهم الحضارات القديمة على المستوى العالمي.",
      icon: "pi pi-search"
    },
    {
      id: '3',
      title: "حفظ التراث",
      description: "حماية وحفظ التراث الأثري المصري العريق للأجيال القادمة باستخدام الطرق العلمية ومشاركة المجتمع.",
      icon: "pi pi-shield"
    },
    {
      id: '4',
      title: "خدمة المجتمع",
      description: "خدمة المجتمع المحلي والدولي من خلال الخبرة الأثرية والبرامج الثقافية والتوعوية التعليمية.",
      icon: "pi pi-users"
    },
    {
      id: '5',
      title: "التعاون الدولي",
      description: "تعزيز الشراكات مع المؤسسات الدولية لتطوير المعرفة الأثرية وتبادل الثقافات.",
      icon: "pi pi-globe"
    },
    {
      id: '6',
      title: "دمج التكنولوجيا",
      description: "توظيف التكنولوجيا الحديثة والطرق الرقمية في البحث الأثري وتوثيق التراث.",
      icon: "pi pi-desktop"
    }
  ];

  private history: HistoryItem[] = [
    {
      year: "2019",
      title: "تأسيس الكلية",
      description: "تم إنشاء كلية الآثار ضمن جامعة الأقصر، لتبدأ مرحلة جديدة في تعليم الآثار بصعيد مصر.",
      image: "assets/history-1.jpg"
    },
    {
      year: "2020",
      title: "إطلاق البرامج الدراسية",
      description: "بدء برامج البكالوريوس في تخصصات: المصريات، والآثار الإسلامية، والترميم والصيانة.",
      image: "assets/history-2.jpg"
    },
    {
      year: "2021",
      title: "افتتاح مركز البحوث",
      description: "افتتاح مركز البحوث الأثرية مزود بأحدث المعامل والتجهيزات.",
      image: "assets/history-3.jpg"
    },
    {
      year: "2022",
      title: "الشراكات الدولية",
      description: "إبرام شراكات مع جامعات ومؤسسات أثرية عالمية رائدة.",
      image: "assets/history-4.jpg"
    },
    {
      year: "2023",
      title: "إطلاق برامج الدراسات العليا",
      description: "بدء برامج الماجستير والدكتوراه في مختلف التخصصات الأثرية.",
      image: "assets/history-5.jpg"
    },
    {
      year: "2024",
      title: "مشروع الأرشيف الرقمي",
      description: "إطلاق مشروع الأرشيف الرقمي الشامل لتوثيق تراث الأقصر الأثري.",
      image: "assets/history-6.jpg"
    }
  ];

  private strategicPlan: StrategicPlan = {
    title: "الخطة الاستراتيجية 2024-2030",
    description: "خطتنا الاستراتيجية الشاملة توضح رؤية الكلية للسنوات الست القادمة، مع التركيز على التميز الأكاديمي والابتكار البحثي وخدمة المجتمع.",
    timeline: "2024-2030",
    goals: [
      {
        id: '1',
        title: "التميز الأكاديمي",
        description: "رفع جودة التعليم والبرامج الأكاديمية",
        targets: [
          "الحصول على الاعتماد الدولي لجميع البرامج",
          "رفع نسبة رضا الطلاب إلى 95%",
          "تطوير 3 برامج تخصصية جديدة",
          "إنشاء برامج تبادل مع 10 جامعات عالمية"
        ],
        icon: "pi pi-star"
      },
      {
        id: '2',
        title: "ريادة البحث العلمي",
        description: "أن نكون مركزًا رائدًا للبحث الأثري",
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
        description: "تحديث المنشآت والقدرات التكنولوجية",
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
        title: "التفاعل مع المجتمع",
        description: "تعزيز التواصل مع المجتمعات المحلية والدولية",
        targets: [
          "إطلاق برامج آثار للجمهور",
          "إنشاء مراكز تراث مجتمعية",
          "تطوير مبادرات سياحة ثقافية",
          "إعداد برامج توعوية تعليمية"
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
      image: "./assets/dean.png",
      email: "dean@arch.luxor.edu.eg",
      office: "مبنى الإدارة - الدور الثالث",
      description: "يقود الكلية بخبرة تزيد عن 20 عامًا في البحث الأثري والإدارة الأكاديمية."
    },
    viceDeans: [
      {
        id: 'vice-dean-academic',
        name: "أ.د. أميرة حسن محمد",
        title: "وكيل الكلية للدراسات والتعليم",
        image: "./assets/icon.jpg",
        email: "academic@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الثاني"
      },
      {
        id: 'vice-dean-postgrad',
        name: "أ.د. أحمد محمود علي",
        title: "وكيل الكلية للدراسات العليا والبحوث",
        image: "./assets/icon.jpg", 
        email: "postgrad@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الثاني"
      },
      {
        id: 'vice-dean-community',
        name: "أ.د. فاطمة إبراهيم",
        title: "وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة",
        image: "./assets/icon.jpg",
        email: "community@arch.luxor.edu.eg",
        office: "مبنى الإدارة - الدور الأول"
      }
    ],
    departmentHeads: [
      {
        id: 'head-egyptology',
        name: "أ.د. محمد صالح",
        title: "رئيس قسم المصريات",
        image: "./assets/icon.jpg",
        email: "egyptology@arch.luxor.edu.eg",
        office: "مبنى قسم المصريات - الدور الثاني"
      },
      {
        id: 'head-islamic',
        name: "أ.د. نادية فاروق",
        title: "رئيس قسم الآثار الإسلامية", 
        image: "./assets/icon.jpg",
        email: "islamic@arch.luxor.edu.eg",
        office: "مبنى الدراسات الإسلامية - الدور الثالث"
      },
      {
        id: 'head-restoration',
        name: "أ.د. هاني مصطفى",
        title: "رئيس قسم الترميم والصيانة",
        image: "./assets/icon.jpg",
        email: "restoration@arch.luxor.edu.eg",
        office: "مبنى معامل الترميم - الدور الأول"
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
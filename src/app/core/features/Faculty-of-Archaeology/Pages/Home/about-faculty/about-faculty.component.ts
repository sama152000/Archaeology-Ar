import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-faculty.component.html',
  styleUrls: ['./about-faculty.component.css']
})
export class AboutFacultyComponent {
  facultyImage = './assets/faculty.png';
  
  aboutContent = {
    title: 'عن كليتنا',
    paragraphs: [
      'تُعد كلية الآثار مركزًا للتميز منذ أكثر من 100 عام، حيث ساهمت في تشكيل أجيال من المؤرخين والمستكشفين. يجمع أساتذتنا بين البحث العلمي والخبرة الميدانية لاكتشاف القصص غير المروية لحضارة الإنسان.',
      'من رمال مصر القديمة إلى أطلال حوض البحر المتوسط، تتمثل رسالتنا في حفظ ومشاركة أغلى تراث للإنسانية من خلال التعليم، والابتكار، والاكتشاف.'
    ],
    buttonText: 'اعرف المزيد',
    buttonLink: '/about'
  };
}
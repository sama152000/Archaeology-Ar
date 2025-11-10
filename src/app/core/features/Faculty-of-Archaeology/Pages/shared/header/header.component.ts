import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  menuItems = [
    { label: 'الرئيسية', link: '/home', active: true },
    {
      label: 'عن الكلية',
      hasSubmenu: true,
      submenu: [
        { label: 'كلمة العميد', link: '/about/dean-message' },
        { label: 'الرؤية والرسالة', link: '/about/vision' },
        { label: 'التاريخ', link: '/about/history' },
        { label: 'الأهداف', link: '/about/objectives' },
        { label: 'الهيكل الإداري', link: '/about/administrative' },
        { label: 'الخطة الاستراتيجية', link: '/about/strategic' }
      ]
    },
    {
      label: 'الأقسام',
      hasSubmenu: true,
      submenu: [
        { label: 'علم المصريات', link: '/departments/1' },
        { label: 'الترميم', link: '/departments/2' },
        { label: 'الآثار الإسلامية', link: '/departments/3' }
      ]
    },
    { label: 'المراكز', link: '/centers' },
    { label: 'الخدمات', link: '/services' },
    { label: 'الأخبار', link: '/posts/news' }
  ];

  ngOnInit() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
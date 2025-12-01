import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../model/header.model';
import { CentersService } from './center.service';
import { ServicesService } from './services.service';
import { SectorsService } from './sectors.service';
import { DepartmentsService } from './departments.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private centersService: CentersService,
    private servicesService: ServicesService,
    private sectorsService: SectorsService,
    private departmentsService: DepartmentsService
  ) {}

  getMenuItems(): Observable<MenuItem[]> {
    return combineLatest([
      this.departmentsService.getDepartments(),
      this.centersService.getCenters(),
      this.servicesService.getServices(),
      this.sectorsService.getSectors()
    ]).pipe(
      map(([departments, centers, services, sectors]) => {
        const menuItems: MenuItem[] = [
          { label: 'الرئيسية', link: '/home', active: true },
          {
            label: 'عن الكلية',
            hasSubmenu: true,
            submenu: [
              { label: 'كلمة العميد', link: '/about/dean-message' },
              { label: 'الرؤية والرسالة', link: '/about/vision' },
              { label: 'تاريخ الكلية', link: '/about/history' },
              { label: 'الأهداف', link: '/about/objectives' },
              { label: 'الهيكل الإداري', link: '/about/administrative' },
              { label: 'الخطة الاستراتيجية', link: '/about/strategic' }
            ]
          },
          {
            label: 'الأقسام العلمية',
            hasSubmenu: true,
            submenu: departments.map(dept => ({
              label: dept.name
                .replace('Department of ', '')
                .replace('قسم ', ''), // لو فيه بالعربي بالفعل هيشتغل تمام
              link: `/departments/${dept.id}`
            }))
          },
          {
            label: 'المراكز البحثية',
            hasSubmenu: true,
            submenu: centers.map(center => ({
              label: center.name
                .replace('Center for ', '')
                .replace('Research Center for ', '')
                .replace('مركز ', ''),
              link: `/centers/${center.id}`
            }))
          },
          {
            label: 'الخدمات',
            hasSubmenu: true,
            submenu: services.map(service => ({
              label: service.name.replace(' Services', '').replace('الخدمات', ''),
              link: `/services/${service.id}`
            }))
          },
          { label: 'الأخبار', link: '/posts/news' },
          {
            label: 'القطاعات',
            hasSubmenu: true,
            submenu: sectors.map(sector => ({
              label: sector.name.replace(' Sector', '').replace('قطاع ', ''),
              link: `/sectors/${sector.id}`
            }))
          },
          { label: 'اتصل بنا', link: '/contact' }
        ];
        return menuItems;
      })
    );
  }
}
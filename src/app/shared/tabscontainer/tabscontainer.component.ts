import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tabscontainer',
  templateUrl: './tabscontainer.component.html',
  styleUrls: ['./tabscontainer.component.css'],
})
export class TabscontainerComponent implements AfterContentInit {
  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activatedtabs = this.tabs?.filter((a) => a.isactive);

    if (!activatedtabs || activatedtabs.length === 0) {
      this.SelectTab(this.tabs.first);
    }
  }

  SelectTab(tab: TabsComponent) {
    this.tabs.forEach((objtab) => {
      objtab.isactive = false;
    });
    tab.isactive=true;
    return false;
  }
}

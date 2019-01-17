import { ParentComponent } from './parent-component.component';
import { AppService } from '../app.service';
import { from } from 'rxjs';

describe('ParentComponent', () => {
  xdescribe('First tests', () => {
    let component: ParentComponent;
    const mockItems = [
      { klucz: 'Mock klucz 1', wartosc: 1 , dana: 'mock dana 1'},
      { klucz: 'Mock klucz 2', wartosc: 2 , dana: 'mock dana 2'},
    ];
    const appService = {
      getItems: () => {
        return from([mockItems]);
      },
    } as AppService;

    beforeEach(() => {
      component = new ParentComponent(appService);
    });

    it('should create component', () => {
      expect(component).toBeDefined();
    });

    it('should be initialized', () => {
      expect(component.items.length).toEqual(0);

      component.ngOnInit();

      expect(component.items.length).toEqual(2);
    });

    it('should return length of items array', () => {
      component.items = mockItems;

      expect(component.getItemsCount()).toEqual(2);
    });
  });

  describe('Second tests', () => {
    let component: ParentComponent;
    let appService: AppService;
    const mockItems = [
      { klucz: 'Mock klucz 1', wartosc: 1 , dana: 'mock dana 1'},
      { klucz: 'Mock klucz 2', wartosc: 2 , dana: 'mock dana 2'},
    ];

    beforeEach(() => {
      appService = new AppService();
      component = new ParentComponent(appService);
    });

    it('should be initialized', () => {
      spyOn(appService, 'getItems').and.returnValue(from(mockItems));

      component.ngOnInit();

      expect(appService.getItems).toHaveBeenCalled();
    });
  });
});

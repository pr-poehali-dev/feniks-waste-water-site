import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const MainNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const equipmentCategories = [
    { name: 'Канализационные решетки', path: '/equipment/canalization-grates' },
    { name: 'Решетки-Дробилки', path: '/equipment/grinders' },
    { name: 'Вспомогательное оборудование', path: '/equipment/auxiliary' },
    { name: 'Доочистка сточных вод', path: '/equipment/water-treatment' },
    { name: 'Оборудование для отстойников', path: '/equipment/settlers' }
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/projects/2b30282d-3b0f-4393-ab9a-de0d916d4ff4/files/fa4407d8-e6b9-4680-b8e1-7edc5cedefea.jpg" 
            alt="ФЕНИКС" 
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl">ФЕНИКС</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
            О компании
          </button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm hover:text-primary transition-colors flex items-center gap-1">
                Каталог <Icon name="ChevronDown" size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {equipmentCategories.map((category) => (
                <DropdownMenuItem
                  key={category.path}
                  onClick={() => navigate(category.path)}
                  className="cursor-pointer"
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
            Контакты
          </button>
          
          <Button onClick={() => scrollToSection('contact')} size="sm">
            Связаться с нами
          </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                О компании
              </button>
              
              <div className="border-t pt-2">
                <p className="text-sm font-semibold mb-2 text-muted-foreground">Каталог оборудования</p>
                {equipmentCategories.map((category) => (
                  <button
                    key={category.path}
                    onClick={() => {
                      navigate(category.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left py-2 pl-4 w-full hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2 hover:text-primary transition-colors"
              >
                Контакты
              </button>
              
              <Button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4"
              >
                Связаться с нами
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MainNav;
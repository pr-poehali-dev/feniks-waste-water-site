import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FUNCTION_URLS } from '@/config/functions';

const Index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const equipmentCategories = [
    { name: 'Канализационные решетки', id: 'category-1', path: '/equipment/canalization-grates' },
    { name: 'Решетки-Дробилки', id: 'category-2', path: '/equipment/grinders' },
    { name: 'Вспомогательное оборудование', id: 'category-3', path: '/equipment/auxiliary' },
    { name: 'Доочистка сточных вод', id: 'category-4', path: '/equipment/water-treatment' },
    { name: 'Оборудование для отстойников', id: 'category-5', path: '/equipment/settlers' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: '',
        message: formData.message,
        equipment: ''
      };

      const emailPromise = fetch(FUNCTION_URLS['send-email'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      const whatsappPromise = fetch(FUNCTION_URLS['send-whatsapp'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData)
      });

      const [emailResponse, whatsappResponse] = await Promise.all([emailPromise, whatsappPromise]);

      if (whatsappResponse.ok) {
        const whatsappData = await whatsappResponse.json();
        if (whatsappData.whatsappUrl) {
          window.open(whatsappData.whatsappUrl, '_blank');
        }
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Ошибка при отправке заявки. Попробуйте еще раз.');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Droplets" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-secondary">ФЕНИКС</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Каталог оборудования
                <Icon name="ChevronDown" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {equipmentCategories.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => navigate(category.path)}
                    className="cursor-pointer py-3"
                  >
                    <Icon name="ArrowRight" size={16} className="mr-2 text-primary" />
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
            Связаться с нами
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
                Профессиональные решения для очистки сточных вод
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                ООО "ФЕНИКС" – ваш надежный партнер в области водоочистного оборудования. 
                Современные технологии для промышленных и коммунальных объектов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('equipment')} className="text-lg px-8">
                  Каталог оборудования
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center">
                <Icon name="Factory" size={200} className="text-primary opacity-30" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { icon: 'Award', title: '15+ лет', description: 'На рынке водоочистки' },
              { icon: 'Users', title: '500+', description: 'Довольных клиентов' },
              { icon: 'CheckCircle2', title: '99%', description: 'Качество продукции' },
              { icon: 'Headphones', title: '24/7', description: 'Техническая поддержка' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Наше оборудование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент оборудования для очистки промышленных и бытовых сточных вод
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Канализационные решетки',
                description: 'Механические и автоматические решетки для задержания крупных загрязнений на входе в очистные сооружения. Надежная защита насосного и технологического оборудования.',
                features: ['Различные размеры ячеек', 'Автоматическая очистка', 'Коррозионностойкие материалы'],
                icon: 'Grid3x3',
                path: '/equipment/canalization-grates'
              },
              {
                title: 'Решетки-Дробилки',
                description: 'Комбинированное оборудование для измельчения и удаления крупных включений из сточных вод. Сокращает объем отходов и упрощает дальнейшую переработку.',
                features: ['Измельчение до 6-10 мм', 'Энергоэффективный привод', 'Минимальное обслуживание'],
                icon: 'Package',
                path: '/equipment/grinders'
              },
              {
                title: 'Вспомогательное оборудование',
                description: 'Полный спектр вспомогательного оборудования: насосы, компрессоры, дозаторы, системы автоматики и контроля для обеспечения бесперебойной работы очистных сооружений.',
                features: ['Системы автоматизации', 'КИПиА и датчики', 'Запасные части'],
                icon: 'Wrench',
                path: '/equipment/auxiliary'
              },
              {
                title: 'Доочистка сточных вод',
                description: 'Оборудование для финишной доочистки: УФ-установки, мембранные модули, сорбционные фильтры. Обеспечивает соответствие самым строгим экологическим нормам.',
                features: ['УФ-обеззараживание', 'Мембранная фильтрация', 'Сорбционные системы'],
                icon: 'Sparkles',
                path: '/equipment/water-treatment'
              },
              {
                title: 'Оборудование для отстойников',
                description: 'Илоскребы, жироуловители, нефтеловушки и системы удаления осадка. Эффективная работа отстойников и их надежная эксплуатация.',
                features: ['Радиальные илоскребы', 'Скребковые механизмы', 'Системы сбора плавающих веществ'],
                icon: 'Container',
                path: '/equipment/settlers'
              }
            ].map((item, index) => (
              <Card key={index} onClick={() => navigate(item.path)} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-muted via-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15, офис 301</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон / WhatsApp</h3>
                      <a href="tel:+79202243445" className="text-muted-foreground hover:text-primary transition-colors block">+7 (920) 224-34-45</a>
                      <a href="https://wa.me/79202243445" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1 mt-1">
                        <Icon name="MessageCircle" size={14} />
                        Написать в WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:zakaz-phenix@mail.ru" className="text-muted-foreground hover:text-primary transition-colors block">zakaz-phenix@mail.ru</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  {isSuccess ? (
                    <div className="text-center py-4">
                      <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
                        <Icon name="Check" size={20} />
                        Заявка отправлена!
                      </div>
                    </div>
                  ) : (
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        'Отправить заявку'
                      )}
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Droplets" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">ФЕНИКС</span>
              </div>
              <p className="text-white/80">
                Профессиональные решения для очистки сточных вод
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('equipment')} className="text-white/80 hover:text-white transition-colors">
                    Оборудование
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="text-white/80 hover:text-white transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="tel:+79202243445" className="hover:text-white transition-colors">+7 (920) 224-34-45</a>
                </li>
                <li>
                  <a href="mailto:zakaz-phenix@mail.ru" className="hover:text-white transition-colors">zakaz-phenix@mail.ru</a>
                </li>
                <li>
                  <a href="https://wa.me/79202243445" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                    <Icon name="MessageCircle" size={14} />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2024 ООО "ФЕНИКС". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
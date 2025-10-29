import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Settlers = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: 'Илоскреб радиальный ИР-24',
      description: 'Радиальный илоскреб для круглых отстойников диаметром до 24 метров с центральным приводом',
      specs: {
        diameter: '12-24 метра',
        depth: '3-5 метров',
        speed: '1-3 об/час',
        drive: 'Центральный электропривод 1.5кВт'
      }
    },
    {
      name: 'Скребковый механизм СМ-40',
      description: 'Продольный скребковый механизм для прямоугольных отстойников длиной до 40 метров',
      specs: {
        length: '20-40 метров',
        width: '4-8 метров',
        speed: '0.5-2 м/мин',
        drive: 'Цепной привод 2.2кВт'
      }
    },
    {
      name: 'Жироуловитель ЖУ-10',
      description: 'Промышленный жироуловитель для предприятий общепита и пищевых производств',
      specs: {
        capacity: '10 м³/час',
        volume: '3 м³',
        efficiency: '95% удаления жиров',
        material: 'Нержавеющая сталь'
      }
    },
    {
      name: 'Нефтеловушка НЛ-20',
      description: 'Коалесцентная нефтеловушка для автомоек, АЗС и промышленных объектов',
      specs: {
        capacity: '20 л/сек',
        volume: '5 м³',
        efficiency: 'До 0.05 мг/л нефтепродуктов',
        material: 'Стеклопластик'
      }
    },
    {
      name: 'Тонкослойный модуль ТМ-50',
      description: 'Тонкослойный модуль для интенсификации процесса отстаивания и осветления воды',
      specs: {
        area: '50 м² осаждения',
        angle: '60 градусов',
        material: 'Полипропилен',
        mounting: 'Модульная конструкция'
      }
    },
    {
      name: 'Система сбора плавающих веществ СП-15',
      description: 'Поверхностный скребок для сбора всплывающих загрязнений и пены',
      specs: {
        width: '6-15 метров',
        capacity: '5-20 м³/час',
        material: 'Нержавеющая сталь',
        drive: 'Электропривод 0.75кВт'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Droplets" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-secondary">ФЕНИКС</span>
          </button>
          <Button onClick={() => navigate('/')} variant="outline">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
              <Icon name="Container" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Оборудование для отстойников</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Илоскребы, жироуловители, нефтеловушки и системы удаления осадка. 
              Эффективная работа отстойников и их надежная эксплуатация.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {models.map((model, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <CardDescription className="text-base">{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(model.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <Button className="w-full">Запросить КП</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-2xl">Типы отстойников</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      icon: 'Circle', 
                      title: 'Радиальные отстойники', 
                      text: 'Круглые отстойники с центральным или периферийным приводом илоскреба' 
                    },
                    { 
                      icon: 'Square', 
                      title: 'Прямоугольные отстойники', 
                      text: 'Продольные отстойники со скребковым механизмом перемещения осадка' 
                    },
                    { 
                      icon: 'Layers', 
                      title: 'Многоярусные отстойники', 
                      text: 'Компактные конструкции с несколькими уровнями отстаивания' 
                    },
                    { 
                      icon: 'Triangle', 
                      title: 'Тонкослойные отстойники', 
                      text: 'Высокоэффективные установки с пластинчатыми модулями' 
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Преимущества нашего оборудования</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      icon: 'Shield', 
                      title: 'Коррозионная стойкость', 
                      text: 'Применение нержавеющих и полимерных материалов для длительного срока службы' 
                    },
                    { 
                      icon: 'Zap', 
                      title: 'Низкое энергопотребление', 
                      text: 'Оптимизированные приводы с частотным регулированием скорости' 
                    },
                    { 
                      icon: 'Wrench', 
                      title: 'Простое обслуживание', 
                      text: 'Доступ ко всем узлам без остановки технологического процесса' 
                    },
                    { 
                      icon: 'Settings', 
                      title: 'Автоматизация', 
                      text: 'Датчики уровня осадка и автоматическое управление выгрузкой' 
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Проектирование под ваши задачи</CardTitle>
              <CardDescription className="text-base">
                Мы разрабатываем индивидуальные решения с учетом специфики вашего объекта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'Ruler', title: 'Расчет параметров', text: 'Подбор оборудования по гидравлике' },
                  { icon: 'FileText', title: 'Проектная документация', text: 'Чертежи и спецификации' },
                  { icon: 'Truck', title: 'Доставка и монтаж', text: 'Шефмонтаж по всей России' },
                  { icon: 'GraduationCap', title: 'Обучение персонала', text: 'Инструктаж по эксплуатации' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Settlers;
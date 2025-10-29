import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const WaterTreatment = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: 'УФ-установка УФ-200',
      description: 'Ультрафиолетовая установка для обеззараживания очищенных сточных вод без применения химии',
      specs: {
        capacity: '200 м³/ч',
        power: '40 ламп по 150Вт',
        efficiency: '99.99% инактивация',
        lifetime: 'Лампы 12000 часов'
      }
    },
    {
      name: 'Мембранный модуль ММ-50',
      description: 'Модуль ультра- и нанофильтрации для глубокой доочистки с удалением микрозагрязнений',
      specs: {
        capacity: '50 м³/сут',
        membrane: 'Половолоконная UF',
        poreSize: '0.01-0.1 мкм',
        recovery: '95-98%'
      }
    },
    {
      name: 'Сорбционный фильтр СФ-100',
      description: 'Угольный фильтр для удаления органических загрязнений, хлора и неприятных запахов',
      specs: {
        capacity: '100 м³/сут',
        sorbent: 'Активированный уголь',
        volume: '2-4 м³ загрузки',
        regeneration: 'Обратной промывкой'
      }
    },
    {
      name: 'Озонаторная установка ОУ-30',
      description: 'Система озонирования для глубокого окисления органики и обесцвечивания воды',
      specs: {
        ozone: '30 г/час',
        power: '3.5 кВт',
        cooling: 'Водяное охлаждение',
        control: 'Автоматическое дозирование'
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
              <Icon name="Sparkles" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Доочистка сточных вод</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Оборудование для финишной доочистки: УФ-установки, мембранные модули, сорбционные фильтры. 
              Обеспечивает соответствие самым строгим экологическим нормам.
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

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Методы доочистки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: 'Zap', 
                    title: 'УФ-обеззараживание', 
                    text: 'Уничтожение бактерий, вирусов и простейших без химических реагентов. Безопасно и экологично.' 
                  },
                  { 
                    icon: 'Filter', 
                    title: 'Мембранная фильтрация', 
                    text: 'Удаление взвешенных веществ, коллоидов и микроорганизмов размером до 0.01 мкм.' 
                  },
                  { 
                    icon: 'Droplet', 
                    title: 'Сорбционная очистка', 
                    text: 'Адсорбция органических загрязнений, хлора, тяжелых металлов на активированном угле.' 
                  },
                  { 
                    icon: 'Wind', 
                    title: 'Озонирование', 
                    text: 'Окисление трудноудаляемых органических соединений, обесцвечивание и дезодорирование.' 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Области применения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: 'Building2', title: 'ЖКХ', text: 'Доочистка городских сточных вод перед сбросом' },
                  { icon: 'Factory', title: 'Промышленность', text: 'Подготовка воды для оборотного водоснабжения' },
                  { icon: 'Recycle', title: 'Экология', text: 'Достижение нормативов рыбохозяйственных водоемов' },
                  { icon: 'Waves', title: 'Водоемы', text: 'Сброс в чувствительные водные объекты' },
                  { icon: 'Sprout', title: 'Сельское хозяйство', text: 'Подготовка для полива и орошения' },
                  { icon: 'Droplets', title: 'Повторное использование', text: 'Техническая вода для предприятий' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg hover:shadow-md transition-all">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name={item.icon} size={28} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
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

export default WaterTreatment;
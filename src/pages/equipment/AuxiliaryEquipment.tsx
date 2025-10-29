import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const AuxiliaryEquipment = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: 'Система автоматизации САУ-01',
      description: 'Комплексная система управления очистными сооружениями с удаленным мониторингом',
      specs: {
        features: 'ПЛК, панель оператора',
        monitoring: 'Web-интерфейс, мобильное приложение',
        sensors: 'pH, кислород, взвеси',
        connection: 'Ethernet, Wi-Fi, 4G'
      },
      price: 'От 285 000 ₽'
    },
    {
      name: 'Насосная станция НС-50',
      description: 'Погружные насосы для перекачки сточных вод с защитой от перегрузок',
      specs: {
        flow: '50-200 м³/ч',
        head: '10-30 метров',
        power: '7.5-15 кВт',
        material: 'Чугун с защитным покрытием'
      },
      price: 'От 175 000 ₽'
    },
    {
      name: 'Компрессорная установка КУ-100',
      description: 'Воздуходувка для аэрации и интенсификации биологических процессов очистки',
      specs: {
        capacity: '100-500 м³/ч',
        pressure: '0.5-1.2 бар',
        power: '11-22 кВт',
        noise: 'Менее 75 дБ'
      },
      price: 'От 420 000 ₽'
    },
    {
      name: 'Дозирующая станция ДС-20',
      description: 'Автоматическая станция дозирования реагентов с емкостями и насосами-дозаторами',
      specs: {
        capacity: '20-200 л/ч',
        tanks: '2-4 емкости по 500л',
        accuracy: '±1%',
        control: 'Автоматический по pH/Redox'
      },
      price: 'От 195 000 ₽'
    },
    {
      name: 'КИПиА комплект К-01',
      description: 'Контрольно-измерительные приборы для мониторинга параметров очистки',
      specs: {
        sensors: 'pH, DO, TSS, температура',
        transmitters: 'Аналоговые 4-20мА',
        display: 'Цифровой дисплей',
        calibration: 'Автоматическая калибровка'
      },
      price: 'От 145 000 ₽'
    },
    {
      name: 'Смеситель вертикальный СВ-30',
      description: 'Погружной смеситель для перемешивания в резервуарах и реакторах',
      specs: {
        volume: '30-150 м³',
        power: '2.2-5.5 кВт',
        speed: '200-400 об/мин',
        material: 'Нержавеющая сталь'
      },
      price: 'От 125 000 ₽'
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
              <Icon name="Wrench" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Вспомогательное оборудование</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр вспомогательного оборудования: насосы, компрессоры, дозаторы, системы автоматики и контроля 
              для обеспечения бесперебойной работы очистных сооружений.
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
                  <div className="space-y-3">
                    {Object.entries(model.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Цена</p>
                      <p className="text-2xl font-bold text-primary">{model.price}</p>
                    </div>
                    <Button>Запросить КП</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl">Комплексный подход</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Puzzle', title: 'Совместимость', text: 'Все оборудование работает в единой системе' },
                  { icon: 'BarChart3', title: 'Мониторинг', text: 'Контроль всех параметров в реальном времени' },
                  { icon: 'Smartphone', title: 'Удаленное управление', text: 'Доступ с любого устройства через интернет' },
                  { icon: 'AlertTriangle', title: 'Оповещения', text: 'Мгновенные уведомления о сбоях' },
                  { icon: 'TrendingUp', title: 'Оптимизация', text: 'Снижение энергопотребления до 30%' },
                  { icon: 'Headphones', title: 'Техподдержка', text: 'Пусконаладка и обучение персонала' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-primary" />
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
      </section>
    </div>
  );
};

export default AuxiliaryEquipment;

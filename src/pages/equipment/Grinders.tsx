import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Grinders = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: 'Решетка-дробилка РД-300',
      description: 'Компактная установка для небольших очистных сооружений с функцией измельчения крупных включений',
      specs: {
        capacity: 'До 300 м³/сут',
        grindingSize: 'До 6 мм',
        power: '3 кВт',
        material: 'Нержавеющая сталь AISI 304'
      },
      price: 'От 340 000 ₽'
    },
    {
      name: 'Решетка-дробилка РД-800',
      description: 'Среднепроизводительная система для промышленных объектов с высокой степенью измельчения',
      specs: {
        capacity: 'До 800 м³/сут',
        grindingSize: 'До 8 мм',
        power: '5.5 кВт',
        material: 'Нержавеющая сталь AISI 316'
      },
      price: 'От 580 000 ₽'
    },
    {
      name: 'Решетка-дробилка РД-1500',
      description: 'Высокопроизводительная установка для крупных очистных комплексов и промышленных предприятий',
      specs: {
        capacity: 'До 1500 м³/сут',
        grindingSize: 'До 10 мм',
        power: '11 кВт',
        material: 'Нержавеющая сталь AISI 316L'
      },
      price: 'От 920 000 ₽'
    },
    {
      name: 'Решетка-дробилка РД-3000 Pro',
      description: 'Профессиональное решение для крупнейших очистных станций с системой самодиагностики',
      specs: {
        capacity: 'До 3000 м³/сут',
        grindingSize: 'До 12 мм',
        power: '18.5 кВт',
        material: 'Специальная сталь с упрочнением'
      },
      price: 'От 1 450 000 ₽'
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
              <Icon name="Package" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Решетки-Дробилки</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комбинированное оборудование для измельчения и удаления крупных включений из сточных вод. 
              Сокращает объем отходов и упрощает дальнейшую переработку.
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
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Icon name="Gauge" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Производительность</p>
                          <p className="text-sm text-muted-foreground">{model.specs.capacity}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Scissors" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Измельчение</p>
                          <p className="text-sm text-muted-foreground">{model.specs.grindingSize}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Icon name="Zap" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Мощность</p>
                          <p className="text-sm text-muted-foreground">{model.specs.power}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Shield" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Материал</p>
                          <p className="text-sm text-muted-foreground">{model.specs.material}</p>
                        </div>
                      </div>
                    </div>
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
              <CardTitle className="text-2xl">Преимущества решеток-дробилок</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Recycle', title: 'Сокращение отходов', text: 'Уменьшение объема отходов до 80%' },
                  { icon: 'TrendingDown', title: 'Экономия', text: 'Снижение затрат на вывоз и утилизацию' },
                  { icon: 'Shield', title: 'Защита оборудования', text: 'Предотвращение засоров насосов и труб' },
                  { icon: 'Settings', title: 'Автоматизация', text: 'Полностью автоматический режим работы' },
                  { icon: 'Clock', title: 'Непрерывная работа', text: 'Круглосуточная эксплуатация без остановок' },
                  { icon: 'Wrench', title: 'Низкие эксплуатационные расходы', text: 'Минимальное техническое обслуживание' }
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

export default Grinders;

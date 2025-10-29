import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const CanalizationGrates = () => {
  const navigate = useNavigate();

  const models = [
    {
      name: 'Решетка механическая РМ-1',
      description: 'Компактная механическая решетка для малых очистных сооружений производительностью до 100 м³/сут',
      specs: {
        width: '500-800 мм',
        cellSize: '10-20 мм',
        material: 'Нержавеющая сталь AISI 304',
        cleaning: 'Ручная очистка'
      }
    },
    {
      name: 'Решетка автоматическая РА-500',
      description: 'Автоматическая решетка с механизмом очистки для средних очистных станций до 500 м³/сут',
      specs: {
        width: '500-1200 мм',
        cellSize: '6-16 мм',
        material: 'Нержавеющая сталь AISI 316',
        cleaning: 'Автоматическая с электроприводом'
      }
    },
    {
      name: 'Решетка ступенчатая РС-1000',
      description: 'Высокопроизводительная ступенчатая решетка для крупных промышленных объектов',
      specs: {
        width: '1000-2000 мм',
        cellSize: '3-10 мм',
        material: 'Нержавеющая сталь AISI 316L',
        cleaning: 'Автоматическая непрерывная'
      }
    },
    {
      name: 'Решетка барабанная РБ-300',
      description: 'Барабанная вращающаяся решетка для глубокой очистки от мелких включений',
      specs: {
        width: '300-800 мм',
        cellSize: '1-6 мм',
        material: 'Нержавеющая сталь с полимерным покрытием',
        cleaning: 'Самоочищающаяся конструкция'
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
              <Icon name="Grid3x3" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Канализационные решетки</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Механические и автоматические решетки для задержания крупных загрязнений на входе в очистные сооружения. 
              Надежная защита насосного и технологического оборудования.
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
                        <Icon name="Ruler" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Ширина канала</p>
                          <p className="text-sm text-muted-foreground">{model.specs.width}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Grid3x3" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Размер ячейки</p>
                          <p className="text-sm text-muted-foreground">{model.specs.cellSize}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Icon name="Shield" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Материал</p>
                          <p className="text-sm text-muted-foreground">{model.specs.material}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Settings" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Очистка</p>
                          <p className="text-sm text-muted-foreground">{model.specs.cleaning}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <Button className="w-full">Запросить КП</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl">Преимущества наших решеток</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'Shield', title: 'Долговечность', text: 'Коррозионностойкие материалы для агрессивных сред' },
                  { icon: 'Zap', title: 'Энергоэффективность', text: 'Оптимизированные приводы с низким энергопотреблением' },
                  { icon: 'Wrench', title: 'Простое обслуживание', text: 'Модульная конструкция для быстрого ремонта' },
                  { icon: 'CheckCircle2', title: 'Надежность', text: 'Проверенные решения с гарантией до 5 лет' },
                  { icon: 'Settings', title: 'Автоматизация', text: 'Системы автоматической очистки и контроля' },
                  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Техническая поддержка и запчасти в наличии' }
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

export default CanalizationGrates;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import QuoteRequestModal from '@/components/QuoteRequestModal';
import MainNav from '@/components/MainNav';
import EditableImage from '@/components/EditableImage';

const Grinders = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState('');

  const models = [
    {
      name: 'Решетка-дробилка РД-300',
      description: 'Компактная установка для небольших очистных сооружений с функцией измельчения крупных включений',
      image: 'https://cdn.poehali.dev/files/3ef50bd1-f417-446f-abdf-0fba0f8302f9.png',
      specs: {
        capacity: 'До 300 м³/сут',
        grindingSize: 'До 6 мм',
        power: '3 кВт',
        material: 'Нержавеющая сталь AISI 304'
      }
    },
    {
      name: 'Решетка-дробилка РД-800',
      description: 'Среднепроизводительная система для промышленных объектов с высокой степенью измельчения',
      image: 'https://cdn.poehali.dev/files/90313498-c9bf-43f2-bc8e-094a86f05544.png',
      specs: {
        capacity: 'До 800 м³/сут',
        grindingSize: 'До 8 мм',
        power: '5.5 кВт',
        material: 'Нержавеющая сталь AISI 316'
      }
    },
    {
      name: 'Решетка-дробилка РД-1500',
      description: 'Высокопроизводительная установка для крупных очистных комплексов и промышленных предприятий',
      image: 'https://cdn.poehali.dev/files/3a1cd770-0b93-42c5-aea8-60285a3a77fe.png',
      specs: {
        capacity: 'До 1500 м³/сут',
        grindingSize: 'До 10 мм',
        power: '11 кВт',
        material: 'Нержавеющая сталь AISI 316L'
      }
    },
    {
      name: 'Решетка-дробилка РД-3000 Pro',
      description: 'Профессиональное решение для крупнейших очистных станций с системой самодиагностики',
      image: 'https://cdn.poehali.dev/files/cc60e260-59f5-49c8-b702-91659d2ee26d.png',
      specs: {
        capacity: 'До 3000 м³/сут',
        grindingSize: 'До 12 мм',
        power: '18.5 кВт',
        material: 'Специальная сталь с упрочнением'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <MainNav />

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
              <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-square w-full bg-white overflow-hidden flex items-center justify-center p-8">
                  <EditableImage
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedEquipment(model.name);
                        setIsModalOpen(true);
                      }}
                    >
                      Запросить КП
                    </Button>
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

      <QuoteRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        equipmentName={selectedEquipment}
      />
    </div>
  );
};

export default Grinders;
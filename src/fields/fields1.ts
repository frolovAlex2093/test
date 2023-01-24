import {
  brakingType,
  brands,
  categoryId,
  categoryTRTS,
  color,
  country,
  cylindersLocation,
  electricalMachineType,
  engineLocation,
  engineNumberLocation,
  feedSystem,
  fuelType,
  ignitionSystems,
  month,
  number,
  powerStorageType,
  schemeConfiguration,
  speedCategories,
  suspension,
  TNVED,
  typeGearBox,
  typeMainTransmission,
  typePropulsion,
  typeTransmission,
  unitGear
} from '../guides';

export const blocks1 = [
  {
    blocksName: '',
    id: 10,
    blocksItem: [
      {
        blockName: '',
        id: 47,
        blockItem: [
          {
            name: 'Мнемоника',
            type: 'TextField',
            id: 158,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['']
          },
          {
            name: 'Полное название организации оформителя',
            type: 'TextField',
            id: 159,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,300}$',
            error: false
          },
          {
            name: 'ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН',
            type: 'TextField',
            id: 198,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,20}$',
            error: false
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Документ, подтверждающий соответствие обязательным требованиям безопасности',
    id: 0,
    blocksItem: [
      {
        blockName: 'Отсутствует',
        id: 0,
        blockItem: [
          {
            name: 'Марка',
            type: 'Autocomplete',
            id: 0,
            require: true,
            checkbox: true,
            disabled: false,
            value: [''],
            options: Object.keys(brands),
            freeSolo: true
          },
          {
            name: 'Код марки, если марка отсутствует в справочнике',
            type: 'TextField',
            id: 199,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,120}$',
            error: false
          },
          {
            name: 'Коммерческое наименование',
            type: 'TextField',
            id: 1,
            require: true,
            checkbox: true,
            disabled: false,
            value: [''],
            pattern: '^.{0,120}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 2,
            require: false,
            checkbox: true,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Модификация',
            type: 'TextField',
            id: 3,
            require: false,
            checkbox: true,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Код ТН ВЭД',
            type: 'Autocomplete',
            id: 4,
            require: true,
            disabled: false,
            checkbox: false,
            value: [''],
            options: Object.keys(TNVED),
            freeSolo: true
          },
          {
            name: 'Категория в соответствии с Правилами оформления',
            type: 'Autocomplete',
            id: 5,
            require: true,
            disabled: false,
            value: [''],
            options: Object.keys(categoryId),
            checkbox: false
          },
          {
            name: 'Категория в соответствии с ТР ТС 031/2012 или ТР ТС 010/2011 или ТР ТС 018/2011 ',
            type: 'Autocomplete',
            id: 6,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(categoryTRTS)
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Идентификационные признаки самоходной машины (другого вида техники)',
    id: 1,
    blocksItem: [
      {
        blockName: 'Идентификационные признаки самоходной машины (другого вида техники)',
        id: 1,
        blockItem: [
          {
            name: 'Идентификационный номер',
            type: 'TextField',
            id: 7,
            require: true,
            checkbox: false,
            disabled: false,
            radio: ['Идентификационный номер', 'Заводской номер'],
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Наименование, определяемое назначением самоходной машины (другого вида техники) ',
            type: 'TextField',
            id: 8,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,500}$',
            error: false
          },
          {
            name: 'Номер двигателя',
            type: 'TextField',
            id: 9,
            require: true,
            checkbox: true,
            button: true,
            disabled: false,
            buttonAdd: true,
            buttonDelete: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Номер кузова (кабины, прицепа, рамы)',
            type: 'TextField',
            id: 10,
            disabled: false,
            require: true,
            checkbox: true,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Номер коробки передач',
            type: 'TextField',
            id: 11,
            require: false,
            disabled: false,
            checkbox: true,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Номер основного ведущего моста',
            type: 'TextField',
            id: 12,
            require: false,
            checkbox: true,
            disabled: false,
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Тип движителя',
            type: 'Autocomplete',
            id: 13,
            require: false,
            checkbox: false,
            value: [''],
            disabled: false,
            options: Object.keys(typePropulsion)
          },
          {
            name: 'Сведения о наличии реверсивного места оператора',
            type: 'checkbox',
            id: 37,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Цвет кузова (кабины, прицепа)',
            type: 'Autocomplete',
            id: 14,
            require: true,
            checkbox: false,
            multiple: true,
            value: [''],
            disabled: false,
            options: Object.keys(color)
          },
          {
            name: 'Признак комбинированного цвета кузова (кабины, прицепа)',
            type: 'checkbox',
            id: 160,
            require: true,
            checkbox: false,
            value: ['false'],
            disabled: false
          },
          {
            name: 'Наименование оттенка цвета кузова (кабины, прицепа)',
            type: 'TextField',
            id: 15,
            require: false,
            checkbox: false,
            value: [''],
            disabled: false
          },
          {
            name: 'Год изготовления',
            type: 'TextField',
            id: 16,
            require: true,
            checkbox: false,
            value: [''],
            disabled: false,
            pattern: '^[0-9]{4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Месяц изготовления',
            type: 'Autocomplete',
            id: 17,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(month)
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Маркировка',
    id: 2,
    blocksItem: [
      {
        blockName: 'Описание маркировки самоходной машины (другого вида техники)',
        id: 2,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Место расположения таблички изготовителя',
            type: 'TextField',
            id: 18,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Место расположения идентификационного номера самоходной машины (другого вида техники)',
            type: 'TextField',
            id: 19,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Описание маркировки двигателя',
        id: 4,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Место расположения номера двигателя',
            type: 'Autocomplete',
            id: 25,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(engineNumberLocation),
            button: true,
            buttonAdd: true,
            buttonDelete: false
          }
        ]
      },
      {
        blockName:
          'Структура и содержание идентификационного номера самоходной машины (другого вида техники)',
        id: 3,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'С',
            type: 'Autocomplete',
            id: 20,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(number)
          },
          {
            name: 'По',
            type: 'Autocomplete',
            id: 21,
            require: true,
            disabled: false,
            checkbox: false,
            value: [''],
            options: Object.keys(number)
          },
          {
            name: 'Описание',
            type: 'TextField',
            id: 22,
            require: false,
            disabled: false,
            checkbox: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Значение',
            type: 'TextField',
            id: 23,
            require: false,
            disabled: false,
            checkbox: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Расшифровка значения',
            type: 'TextField',
            id: 24,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [23, 24],
            buttons: [true, false],
            groupBlock: [20, 21, 22, 23, 24],
            count: 0,
            groupBlockAdd: [20, 21, 22, 23, 24],
            countBlock: 0,
            buttonText: 'Добавить значение и расшифровку',
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Структура и содержание номера двигателя',
        id: 5,
        checkbox: true,
        check: true,
        button: false,
        buttonAdd: false,
        buttonDelete: false,
        blockItem: [
          {
            name: 'С',
            type: 'Autocomplete',
            id: 26,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(number)
          },
          {
            name: 'По',
            type: 'Autocomplete',
            id: 27,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(number)
          },
          {
            name: 'Описание',
            type: 'TextField',
            id: 28,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Значение',
            type: 'TextField',
            id: 29,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Расшифровка значения',
            type: 'TextField',
            id: 30,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [26, 27, 28, 29, 30],
            buttonText: 'Добавить группу',
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Общие характеристики самоходной машины (другого вида техники)',
    id: 3,
    blocksItem: [
      {
        blockName: 'Количество осей/колес',
        id: 6,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Количество колес',
            type: 'TextField',
            id: 31,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Количество ведущих колес',
            type: 'TextField',
            id: 165,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Количество осей',
            type: 'TextField',
            id: 166,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Описание осей',
        id: 55,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Порядковый номер оси',
            type: 'Autocomplete',
            id: 32,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: []
          },
          {
            name: 'Технически допустимая максимальная масса на ось',
            type: 'TextField',
            id: 167,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кг',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Колеса со сдвоенными шинами',
            type: 'checkbox',
            id: 33,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Управляемая ось',
            type: 'checkbox',
            id: 200,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Ведущая ось',
            type: 'checkbox',
            id: 201,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Тормозная ось',
            type: 'checkbox',
            id: 202,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Колея',
            type: 'TextField',
            id: 169,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [32, 167, 33, 200, 201, 202, 169],
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            buttonText: 'Добавить ось',
            error: false
          }
        ]
      },
      {
        blockName: 'Схема компоновки',
        id: 7,
        blockItem: [
          {
            name: 'Схема компоновки',
            type: 'Autocomplete',
            id: 34,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(schemeConfiguration)
          },
          {
            name: 'Рама',
            type: 'TextField',
            id: 35,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Положение и размещение приводного двигателя (двигателей)',
            type: 'Autocomplete',
            id: 36,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            options: Object.keys(engineLocation)
          },
          {
            name: 'Количество дверей',
            type: 'TextField',
            id: 41,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Исполнение загрузочного пространства',
            type: 'TextField',
            id: 38,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Тип кузова',
            type: 'TextField',
            id: 40,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Пассажировместимость',
            type: 'TextField',
            id: 39,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'База',
        id: 10,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'База',
            type: 'TextField',
            id: 46,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            buttonText: 'Добавить базу',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Габаритные размеры в транспортном положении',
        id: 9,
        blockItem: [
          {
            name: 'Длина',
            type: 'TextField',
            id: 42,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Ширина',
            type: 'TextField',
            id: 43,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Высота',
            type: 'TextField',
            id: 44,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Дорожный просвет',
            type: 'TextField',
            id: 45,
            require: false,
            checkbox: true,
            disabled: false,
            value: [''],
            endAdornment: 'мм',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Масса',
        id: 12,
        blockItem: [
          {
            name: 'Вид массы',
            type: 'Autocomplete',
            id: 49,
            require: true,
            checkbox: false,
            disabled: true,
            value: ['Технически допустимая максимальная масса самоходной машины (другого вида техники)'],
            options: [
              'Полезная нагрузка самоходной машины (другого вида техники)',
              'Технически допустимая общая масса самоходной машины (другого вида техники) и прицепа',
              'Снаряженная (эксплуатационная) масса самоходной машины (другого вида техники)'
            ]
          },
          {
            name: 'Масса',
            type: 'TextField',
            id: 50,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кг',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [49, 50],
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            buttonText: 'Добавить массу',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Максимальная масса прицепа',
        id: 14,
        blockItem: [
          {
            name: 'Буксировка прицепа',
            type: 'checkbox',
            id: 53,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Масса прицепа без тормозной системы',
            type: 'TextField',
            id: 54,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            endAdornment: 'кг',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Масса прицепа с тормозной системой',
            type: 'TextField',
            id: 55,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            endAdornment: 'кг',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Технически допустимая статическая вертикальная нагрузка в точке сцепки тягово-сцепного устройства',
            type: 'TextField',
            id: 192,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            endAdornment: 'кг',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Техническая допустимая буксируемая масса',
            type: 'TextField',
            id: 193,
            require: true,
            checkbox: false,
            disabled: true,
            value: [''],
            endAdornment: 'кг',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Описание гибридной самоходной машины (другого вида техники)',
        id: 15,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Описание гибридной самоходной машины (другого вида техники)',
            type: 'TextField',
            id: 56,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Основной двигатель внутреннего сгорания',
        id: 16,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 57,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,200}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 58,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Количество цилиндров',
            type: 'TextField',
            id: 59,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,20}$',
            numeric: true,
            error: false
          },
          {
            name: 'Расположение цилиндров',
            type: 'Autocomplete',
            id: 60,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(cylindersLocation)
          },
          {
            name: 'Рабочий объем цилиндров',
            type: 'TextField',
            id: 61,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'см³',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Степень сжатия',
            type: 'TextField',
            id: 62,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,20}$',
            error: false
          },
          {
            name: 'Максимальная мощность',
            type: 'TextField',
            id: 63,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кВт',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Минимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 64,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 65,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальный крутящий момент',
            type: 'TextField',
            id: 66,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'Н·м',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Минимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 67,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 68,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68],
            buttonText: 'Добавить двигатель',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Основной электрический двигатель',
        id: 17,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 69,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,200}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 70,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Максимальная 30-минутная мощность',
            type: 'TextField',
            id: 71,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кВт',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Рабочее напряжение',
            type: 'TextField',
            id: 72,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            endAdornment: 'В',
            group: [69, 70, 71, 72],
            buttonText: 'Добавить двигатель',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Топливо',
        id: 18,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Топливо',
            type: 'Autocomplete',
            multiple: true,
            id: 73,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(fuelType)
          }
        ]
      },
      {
        blockName: 'Система питания',
        id: 19,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Тип системы питания',
            type: 'Autocomplete',
            id: 74,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(feedSystem)
          }
        ]
      },
      {
        blockName: 'Блок управления',
        id: 20,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Маркировка',
            type: 'TextField',
            id: 75,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,100}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Система зажигания',
        id: 21,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Тип системы зажигания',
            type: 'Autocomplete',
            id: 76,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(ignitionSystems)
          }
        ]
      },
      {
        blockName: 'Система выпуска и нейтрализации отработавших газов',
        id: 22,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Тип',
            type: 'TextField',
            id: 77,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Дополнительный двигатель внутреннего сгорания',
        id: 23,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 78,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,200}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 79,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Количество цилиндров',
            type: 'TextField',
            id: 80,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Расположение цилиндров',
            type: 'Autocomplete',
            id: 81,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(cylindersLocation)
          },
          {
            name: 'Рабочий объем цилиндров',
            type: 'TextField',
            id: 82,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'см³',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Степень сжатия',
            type: 'TextField',
            id: 83,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,20}$',
            error: false
          },
          {
            name: 'Максимальная мощность',
            type: 'TextField',
            id: 84,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кВт',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Минимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 85,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 86,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальный крутящий момент',
            type: 'TextField',
            id: 87,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'Н·м',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Минимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 88,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимальная скорость вращения коленчатого вала',
            type: 'TextField',
            id: 89,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            buttonText: 'Добавить двигатель',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Дополнительный электрический двигатель',
        id: 24,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 90,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,200}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 91,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Максимальная 30-минутная мощность',
            type: 'TextField',
            id: 92,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кВт',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Рабочее напряжение',
            type: 'TextField',
            id: 93,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'В',
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [90, 91, 92, 93],
            buttonText: 'Добавить двигатель',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Номинальное напряжение',
        id: 26,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Номинальное напряжение',
            type: 'TextField',
            id: 94,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'В',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Устройство накопления энергии',
        id: 60,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Тип',
            type: 'Autocomplete',
            id: 194,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(powerStorageType)
          },
          {
            name: 'Место расположения',
            type: 'TextField',
            id: 195,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Запас хода',
            type: 'TextField',
            id: 196,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'км',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Шины',
        id: 27,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Разные шины',
            type: 'checkbox',
            id: 190,
            require: true,
            checkbox: false,
            value: ['false'],
            disabled: true
          },
          {
            name: 'Расположение',
            type: 'Autocomplete',
            id: 191,
            require: true,
            checkbox: false,
            value: [''],
            disabled: true,
            options: []
          },
          {
            name: 'Размерность',
            type: 'TextField',
            id: 95,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,20}$',
            error: false
          },
          {
            name: 'Двускатная шина',
            type: 'checkbox',
            id: 96,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Минимально',
            type: 'TextField',
            id: 97,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            label:
              'Индекс несущей способности для максимально допустимой нагрузки для односкатных шин',
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Максимально',
            type: 'TextField',
            id: 98,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Минимально',
            type: 'TextField',
            id: 99,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            label:
              'Индекс несущей способности для максимально допустимой нагрузки для двускатных шин',
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Максимально',
            type: 'TextField',
            id: 100,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Скоростная категория',
            type: 'Autocomplete',
            id: 101,
            multiple: true,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(speedCategories)
          },
          {
            name: 'Шина временного использования',
            type: 'checkbox',
            id: 102,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false'],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [191, 95, 96, 97, 98, 99, 100, 101, 102],
            buttonText: 'Добавить шины'
          }
          // {
          //   name: 'Максимальные допустимые размеры на осях с тормозной системой',
          //   type: 'TextField',
          //   id: 103,
          //   require: false,
          //   checkbox: false,
          //   disabled: false,
          //   value: [''],
          //   button: true,
          //   buttonAdd: true,
          //   buttonDelete: false
          // }
        ]
      },
      {
        blockName: 'Трансмиссия',
        id: 29,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Тип',
            type: 'Autocomplete',
            id: 104,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(typeTransmission)
          },
          {
            name: 'Схема трансмиссии',
            type: 'TextField',
            id: 105,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [104, 105],
            pattern: '^.{0,1000}$',
            buttonText: 'Добавить трансмиссию',
            error: false
          }
        ]
      },
      {
        blockName: 'Коробка передач',
        id: 30,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 106,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,120}$',
            error: false
          },
          {
            name: 'Маркировка',
            type: 'TextField',
            id: 107,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,100}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'Autocomplete',
            id: 108,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(typeGearBox)
          },
          {
            name: 'Число передач вперед',
            type: 'TextField',
            id: 109,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Число передач назад',
            type: 'TextField',
            id: 110,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Бесступенчатая коробка передач',
            type: 'checkbox',
            id: 161,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['false']
          },
          {
            name: 'Наименование передачи',
            type: 'Autocomplete',
            id: 111,
            label: 'Передаточные числа',
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(unitGear)
          },
          {
            name: 'Вид передаточного числа',
            type: 'Autocomplete',
            id: 112,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: ['высшее', 'высший разряд', 'низшее', 'низший разряд']
          },
          {
            name: 'Передаточное число',
            type: 'TextField',
            id: 113,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Минимально',
            type: 'TextField',
            id: 163,
            label: 'Для бесступенчатой коробки передач',
            require: true,
            checkbox: false,
            disabled: true,
            value: [''],
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Максимально',
            type: 'TextField',
            id: 164,
            require: true,
            checkbox: false,
            disabled: true,
            value: [''],
            buttons: [true, false],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [111, 112, 113, 163, 164],
            groupBlock: [106, 107, 108, 109, 110, 161, 111, 112, 113, 163, 164],
            groupBlockAdd: [106, 107, 108, 109, 110, 161, 111, 112, 113, 163, 164],
            countBlock: 0,
            count: 0,
            buttonText: 'Добавить передачу',
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Раздаточная коробка',
        id: 31,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Марка',
            type: 'TextField',
            id: 114,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,120}$',
            error: false
          },
          {
            name: 'Маркировка',
            type: 'TextField',
            id: 115,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,100}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 116,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Число передач',
            type: 'TextField',
            id: 117,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Наименование передачи',
            type: 'Autocomplete',
            id: 118,
            label: 'Передаточные числа',
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            options: Object.keys(unitGear)
          },
          {
            name: 'Вид передаточного числа',
            type: 'Autocomplete',
            id: 119,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            options: ['высшее', 'высший разряд', 'низшее', 'низший разряд']
          },
          {
            name: 'Передаточное число',
            type: 'TextField',
            id: 120,
            require: true,
            checkbox: false,
            disabled: true,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [118, 119, 120],
            buttons: [true, false],
            groupBlock: [114, 115, 116, 117, 118, 119, 120],
            groupBlockAdd: [114, 115, 116, 117, 118, 119, 120],
            countBlock: 0,
            count: 0,
            buttonText: 'Добавить передачу',
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Главная передача',
        id: 32,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Распределение по осям',
            type: 'Autocomplete',
            id: 121,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: ['задняя', 'передняя']
          },
          {
            name: 'Марка',
            type: 'TextField',
            id: 122,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,120}$'
          },
          {
            name: 'Маркировка',
            type: 'TextField',
            id: 123,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,100}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'Autocomplete',
            id: 124,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(typeMainTransmission)
          },
          {
            name: 'Число передач',
            type: 'TextField',
            id: 197,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.[0-9]{0,4}$',
            numeric: true,
            error: false
          },
          {
            name: 'Наименование передачи',
            type: 'Autocomplete',
            id: 125,
            label: 'Передаточные числа',
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            options: Object.keys(unitGear)
          },
          {
            name: 'Вид передаточного числа',
            type: 'Autocomplete',
            id: 126,
            require: false,
            checkbox: false,
            disabled: true,
            value: [''],
            options: ['высшее', 'высший разряд', 'низшее', 'низший разряд']
          },
          {
            name: 'Передаточное число',
            type: 'TextField',
            id: 127,
            require: true,
            checkbox: false,
            disabled: true,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [125, 126, 127],
            buttons: [true, false],
            groupBlock: [121, 122, 123, 124, 197, 125, 126, 127],
            groupBlockAdd: [121, 122, 123, 124, 197, 125, 126, 127],
            countBlock: 0,
            count: 0,
            buttonText: 'Добавить передачу',
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Вал отбора мощности',
        id: 33,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Тип',
            type: 'TextField',
            id: 128,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Расположение',
            type: 'TextField',
            id: 129,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Частота вращения',
            type: 'TextField',
            id: 130,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'мин⁻¹',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Отношение к частоте вращения двигателя вала отбора мощности',
            type: 'TextField',
            id: 131,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [128, 129, 130, 131],
            buttonText: 'Добавить вал отбора мощности',
            pattern: '^[0-9]{0,5}((.|,)[0-9]{1,3})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Электромашина',
        id: 34,
        checkbox: true,
        check: true,
        blockItem: [
          {
            name: 'Вид электромашины',
            type: 'Autocomplete',
            id: 132,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(electricalMachineType)
          },
          {
            name: 'Марка',
            type: 'TextField',
            id: 133,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,200}$',
            error: false
          },
          {
            name: 'Тип',
            type: 'TextField',
            id: 134,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          },
          {
            name: 'Максимальная 30-минутная мощность',
            type: 'TextField',
            id: 135,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'кВт',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          },
          {
            name: 'Рабочее напряжение',
            endAdornment: 'В',
            type: 'TextField',
            id: 136,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [132, 133, 134, 135, 136],
            buttonText: 'Добавить электромашину',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      },
      {
        blockName: 'Подвеска',
        id: 35,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Вид подвески',
            type: 'Autocomplete',
            id: 137,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(suspension)
          },
          {
            name: 'Описание',
            type: 'TextField',
            id: 138,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [137, 138],
            pattern: '^.{0,1000}$',
            buttonText: 'Добавить подвеску',
            error: false
          }
        ]
      },
      {
        blockName: 'Рулевое управление',
        id: 36,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Положение рулевого колеса',
            type: 'Autocomplete',
            id: 139,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: ['справа', 'слева', 'посередине']
          },
          {
            name: 'Описание',
            type: 'TextField',
            id: 140,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,1000}$',
            error: false
          }
        ]
      },
      {
        blockName: 'Тормозные системы',
        id: 37,
        checkbox: true,
        check: false,
        blockItem: [
          {
            name: 'Наименование элемента тормозной системы',
            type: 'Autocomplete',
            id: 141,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(brakingType)
          },
          {
            name: 'Описание',
            type: 'TextField',
            id: 142,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            button: true,
            buttonAdd: true,
            buttonDelete: false,
            group: [141, 142],
            pattern: '^.{0,1000}$',
            buttonText: 'Добавить тормозную систему',
            error: false
          }
        ]
      },
      {
        blockName: 'Максимальная скорость',
        id: 38,
        blockItem: [
          {
            name: 'Максимальная скорость',
            type: 'TextField',
            id: 143,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            endAdornment: 'КМ/Ч',
            pattern: '^[0-9]{0,24}((.|,)[0-9]{1,6})?$',
            numeric: true,
            error: false
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Информация изготовителя',
    id: 4,
    blocksItem: [
      {
        blockName: '',
        id: 39,
        blockItem: [
          {
            name: 'Информация изготовителя',
            type: 'TextField',
            id: 144,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,4000}$',
            error: false
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Общий вид самоходной машины (другого вида техники)',
    id: 11,
    blocksItem: [
      {
        blockName: '',
        id: 49,
        blockItem: [
          {
            name: '',
            type: 'files',
            id: 162,
            require: true,
            checkbox: false,
            disabled: false,
            value: [''],
            files: [],
            pattern: 'false'
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Дополнительная информация',
    id: 5,
    blocksItem: [
      {
        blockName: '',
        id: 40,
        blockItem: [
          {
            name: 'Дополнительная информация',
            type: 'TextField',
            id: 145,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,4000}$',
            error: false
          }
        ]
      }
    ]
  },
  {
    blocksName: 'Административная информация',
    id: 6,
    blocksItem: [
      {
        blockName: 'Административная информация',
        id: 41,
        blockItem: [
          {
            name: 'Сведения об идентификационном номере устройства вызова экстренных оперативных служб',
            type: 'TextField',
            id: 146,
            require: false,
            checkbox: true,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Сведения об идентификационном номере аппаратуры спутниковой навигации',
            type: 'TextField',
            id: 147,
            require: false,
            checkbox: true,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Страна происхождения',
            type: 'Autocomplete',
            id: 148,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            options: Object.keys(country)
          }
        ]
      },
      {
        blockName:
          'Сведения о документе, подтверждающем оформление электронного паспорта при отсутствии документа, подтверждающего соответствие требованиям безопасности',
        id: 43,
        blockItem: [
          {
            name: 'Наименование документа',
            type: 'TextField',
            id: 150,
            require: false,
            checkbox: false,
            disabled: true,
            value: ['Свидетельство о регистрации СМ'],
            defaultValue: 'Свидетельство о регистрации СМ'
          },
          {
            name: 'Номер документа',
            type: 'TextField',
            id: 151,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,50}$',
            error: false
          },
          {
            name: 'Дата документа',
            type: 'date',
            id: 152,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['']
          },
          {
            name: 'Кем выдано',
            type: 'TextField',
            id: 153,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^.{0,300}$',
            error: false
          },
          {
            name: 'Количество страниц',
            type: 'TextField',
            id: 203,
            require: false,
            checkbox: false,
            disabled: false,
            value: [''],
            pattern: '^[0-9]{0,4}$',
            // error: false,
            // numeric: true
          }
        ]
      }
    ]
  }
];

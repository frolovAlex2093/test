import { Box } from '@mui/material';
import React from 'react';
import { Blocks } from '../components';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { eleventhFields } from '../fields/eleventhFields';
import {
  brakingType,
  brands,
  categoryId,
  color,
  country,
  electricalMachineType,
  fuelType,
  massType,
  month,
  steeringType,
  suspension,
  typePropulsion,
  docsType
} from '../guides';
import { IDict } from '../interfaces/interfaces';
import { Context } from './Third';

export const Eleventh: React.FC = () => {
  const [blocks, setBlocks] = React.useState(eleventhFields);

  const alertValidation = (pattern: string, value: string): boolean => {
    if (pattern === '^[0-9]{4}$' && /^[0-9]{4}$/.test(value) === false) return true;
    if (pattern === '^[0-9]{15}$' && /^[0-9]{15}$/.test(value) === false) return true;
	      if (pattern === '^3(643|112)02[0-9]{9}$' && /^3(643|112)02[0-9]{9}$/.test(value) === false)  return true;
    if (pattern === '^[0-9]+$' && /^[0-9]+$/.test(value) === false) return true;
    if (pattern === '^.{0,50}$' && /^.{0,50}$/.test(value) === false) return true;
    if (pattern === '^.{0,120}$' && /^.{0,120}$/.test(value) === false) return true;
    if (pattern === '^.{0,200}$' && /^.{0,200}$/.test(value) === false) return true;
    if (pattern === '^.{0,300}$' && /^.{0,300}$/.test(value) === false) return true;
    if (pattern === '^.{0,500}$' && /^.{0,500}$/.test(value) === false) return true;
    if (pattern === '^.{0,4000}$' && /^.{0,4000}$/.test(value) === false) return true;
    if (pattern === '^.{0,1000}$' && /^.{0,1000}$/.test(value) === false) return true;
    if (pattern === '^[0-9]{0,4}$' && /^[0-9]{0,4}$/.test(value) === false) return true;
    if (pattern === '^[0-9]{0,20}$' && /^[0-9]{0,20}$/.test(value) === false) return true;
    if (pattern === '^.{0,20}$' && /^.{0,20}$/.test(value) === false) return true;
	  if (pattern === '^(RU|BY).+$' && /^(RU|BY).+$/.test(value) === false) return true;
    if (pattern === '^[0-9]+(,|.)[0-9]{2}$' && /^[0-9]+(,|.)[0-9]{2}$/.test(value) === false)
      return true;

    if (
      pattern === '^(([a-zA-Z0-9_]|[^a-zA-Z0-9_])+)@([a-zA-Z0-9_]+).([a-zA-Z0-9_]+)$' &&
      /^(([a-zA-Z0-9_]|[^a-zA-Z0-9_])+)@([a-zA-Z0-9_]+)\.([a-zA-Z0-9_]+)$/.test(value) === false
    )
      return true;

    if (
      pattern === '^[0-9]{0,24}((.|,)[0-9]{1,6})?$' &&
      /^[0-9]{0,24}((.|,)[0-9]{1,6})?$/.test(value) === false
    )
      return true;
    if (
      pattern === '^[0-9]{0,5}((.|,)[0-9]{1,3})?$' &&
      /^[0-9]{0,5}((.|,)[0-9]{1,3})?$/.test(value) === false
    )
      return true;
    return false;
  };

  const onClickHiddenButton = (groupHidden: number[] | undefined, id: number) => {
    let max: number = 0;
    let check: boolean = true;
    let group1: number[] = [];
    let group2: number[] = [];

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        item.blockItem.map((i) => {
          if (id === 237 || id === 264 || id === 291) {
            if (i.id === id && 'mainHidden' in i && i.mainHidden !== undefined) {
              check = !i.mainHidden[0];
            }
          }
        });
      });
    });

    setBlocks(
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          if (item.id > max) max = item.id;

          item.blockItem.map((i) => {
            if (
              groupHidden &&
              groupHidden.includes(i.id) &&
              'hidden' in i &&
              i.hidden !== undefined
            ) {
              i.hidden = !i.hidden;
              i.disabled = !i.disabled;
              if (i.hidden) {
                i.value[0] = '';
              }
              if (
                'mainHidden' in i &&
                i.mainHidden !== undefined &&
                (id === 237 || id === 264 || id === 291)
              ) {
                i.mainHidden[0] = check;
              }
              if (check && (id === 237 || id === 264 || id === 291)) {
                i.hidden = true;
                i.disabled = true;
                i.value[0] = '';
              }
            }
            if (id === 237 || id === 264 || id === 291) {
              if (
                i.id !== 237 &&
                i.id !== 264 &&
                i.id !== 291 &&
                'hiddenButton' in i &&
                i.hiddenButton !== undefined
              ) {
                if (i.buttonText.includes('юридический')) {
                  group1 = i.hiddenButton;
                } else if (i.buttonText.includes('фактический')) {
                  group2 = i.hiddenButton;
                }
              }
            }
            // if ('mainHidden' in i && i.mainHidden !== undefined && i.mainHidden[0] === true) {
            //   i.mainHidden[0] = check;
            // }
            return i;
          });

          item.blockItem.map((i) => {
            if (!check && groupHidden &&
              groupHidden.includes(i.id)) {
              if (group1.includes(i.id) || group2.includes(i.id)) {
                if ('hidden' in i && i.hidden !== undefined) {
                  i.hidden = true;
                  i.disabled = true;
                  i.value[0] = '';
                }
              }
            }
          });
          return item;
        });
        return items;
      })
    );
    console.log(max + 1);
  };

  const deleteFile = (file: string) => {
    if (typeof file === 'string')
      setBlocks(
        blocks.map((items) => {
          if (items.id === 11) {
            items.blocksItem.map((item) => {
              item.blockItem.map((i) => {
                if ('files' in i && i.files !== undefined) {
                  i.value.splice(i.files.indexOf(file), 1);
                  i.files.splice(i.files.indexOf(file), 1);
                  alerts(i.files);
                }
                return i;
              });
              return item;
            });
          }
          return items;
        })
      );
  };

  const onClickAddDopBlock = (id: number, groupBlock: number[] | undefined) => {
    if (groupBlock !== undefined) {
      let max = 0;
      let indexStart = null;
      blocks.map((items) =>
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id > max) max = i.id;
            return i;
          });
          return item;
        })
      );

      let maxCount = 0;
      let newGroupBlock: number[] = [];
      let newGroup: number[] = [];

      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            indexStart = item.blockItem.map((el) => el.id).indexOf(groupBlock[0]);
            if (indexStart >= 0) {
              for (let z = 0; z < groupBlock.length; z++) {
                item.blockItem.splice(item.blockItem.length - z + groupBlock.length, 0, {
                  ...item.blockItem[z + indexStart],
                  id: max + 1,
                  value: ['']
                });

                newGroupBlock.push(max + 1);
                max++;
              }
              item.blockItem.map((i) => {
                if ('count' in i && i.count !== undefined) {
                  if (i.count > maxCount) maxCount = i.count;
                }
                return i;
              });
            }
            item.blockItem.map((i) => {
              if (i.id === max) {
                if ('count' in i && i.count !== undefined) {
                  i.count = maxCount++;
                }
                if ('countBlock' in i && i.countBlock !== undefined) {
                  i.countBlock++;
                }
                if ('buttons' in i && i.buttons !== undefined) {
                  i.buttons = [true, true];
                }
                i.checkbox = false;
                if ('groupBlock' in i) {
                  for (let z = groupBlock.length - 1; z >= 0; z--) {
                    if (i.groupBlock !== undefined) {
                      i.groupBlock = newGroupBlock;
                    }
                  }
                }
                if ('group' in i && i.group !== undefined) {
                  for (let z = i.group.length - 1; z >= 0; z--) {
                    newGroup[z] = max - z;
                  }
                  i.group = newGroup.reverse();
                }
              }

              return i;
            });
            return { ...item };
          });
          return { ...items };
        })
      );
    }
  };

  const handleChangeCheck = (id: number, checked: boolean) => {
    let checkTires: boolean;
    let checkTrailer: boolean;
    let checkGear: boolean;

    setBlocks(
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id === id) {
              if (i.type === 'checkbox') {
                i.value[0] = `${checked}`;
              } else if ('disabled' in i) i.disabled = !i.disabled;
            }
            if (i.name === 'Разные шины') {
              checkTires = i.value[0] === 'true';
            }
            if (i.name === 'Бесступенчатая коробка передач') {
              checkGear = i.value[0] === 'true';
            }
            if (i.name === 'Буксировка прицепа') {
              checkTrailer = i.value[0] === 'true';
            }
            if (
              i.name ===
              'Технически допустимая статическая вертикальная нагрузка в точке сцепки тягово-сцепного устройства'
            ) {
              i.disabled = !checkTrailer;
            }
            if (i.name === 'Техническая допустимая буксируемая масса') {
              i.disabled = !checkTrailer;
            }
            if (i.name === 'Масса прицепа с тормозной системой') {
              i.disabled = !checkTrailer;
            }
            if (i.name === 'Масса прицепа без тормозной системы') {
              i.disabled = !checkTrailer;
            }
            return i;
          });
          if (item.id === 27) {
            item.blockItem.map((i) => {
              if (i.name === 'Расположение') {
                i.disabled = !checkTires;
              }
              for (let z = 0; z < item.blockItem.length; z++) {
                if (item.blockItem[z].name === 'Двускатная шина' && item.blockItem[z].id === 96) {
                  item.blockItem[z + 3].disabled = !(item.blockItem[z].value[0] === 'true');
                  item.blockItem[z + 4].disabled = item.blockItem[z + 3].disabled;
                } else if (item.blockItem[z].name === 'Двускатная шина') {
                  item.blockItem[z + 3].disabled = !(item.blockItem[z].value[0] === 'true');
                  item.blockItem[z + 4].disabled = item.blockItem[z + 3].disabled;
                }
              }
              return i;
            });
          }
          if (item.id === 30) {
            item.blockItem.map((i) => {
              if (i.name === 'Передаточное число') {
                i.disabled = checkGear;
              }
              if (i.name === 'Максимально') {
                i.disabled = !checkGear;
              }
              if (i.name === 'Минимально') {
                i.disabled = !checkGear;
              }
              return i;
            });
          }
          return { ...item };
        });
        return { ...items };
      })
    );
  };
  function divme(a: number, b: number) {
    return (a - (a % b)) / b;
  }
  const handleChangeValue = async (id: number, value: string | string[] | null) => {
    let checkPropulsion: boolean = true;
    let options: string[] = [];
    let axes: number = 0;
    let ownerStr: string = '';
    let countTires: number = 0;
    let checkTNVED: boolean = false;
    let tnvedValue: string = "";
    setBlocks(
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id === id) {
              if (Array.isArray(value)) {
                i.value = value;
              } else if (value === null) {
                i.value[0] = '';
              } else {
                i.value[0] = value.replace(/ +/g, ' ').trim();
              }
              if ('pattern' in i && i.pattern !== undefined && 'error' in i) {
                i.error = alertValidation(i.pattern, i.value[0]);
              }
		    if (
                'error' in i &&
                i.error !== true &&
                i.name ===
                  'Уникальный номер оформляемого электронного паспорта в системах электронных паспортов' &&
                i.value !== null
              ) {
                let num = parseInt(i.value[0]);
                if (num % 10 !== (divme(num, 10) - divme(divme(num, 10), 11) * 11) % 10) {
                  console.log(num % 10);
                  console.log((divme(num, 10) - divme(divme(num, 10), 11) * 11) % 10);
                  i.error = true;
                }
              }
              if ('numeric' in i && i.numeric === true) {
                i.value[0] = i.value[0].replace(/ +/g, '');
              }
            }
            if (i.id === 31) {
              countTires = Number(i.value[0]);
            }
            if (i.id === 166) {
              axes = parseInt(i.value[0]);
              for (let z = 0; z < axes; z++) {
                options.push(`${z + 1}-ая ось`);
              }
            }
            if (i.id === 13 && i.value[0] === 'колесный движитель') {
              checkPropulsion = false;
            }
            if (i.id === 13 && i.value[0] !== 'колесный движитель') checkPropulsion = true;
            if (i.name === 'Разные шины') {
              i.disabled = checkPropulsion;
            }
            if (i.name === 'Расположение' && 'options' in i && i.options !== undefined) {
              i.options = options;
            }
            if (i.name === 'Порядковый номер оси' && 'options' in i && i.options !== undefined) {
              i.options = options;
            }
            if (i.name === 'Тип собственника') {
              if (i.value[0] === 'Юридическое лицо') {
                ownerStr = 'Идентификатор (ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН)';
              } else if (i.value[0] === 'Физическое лицо') {
                ownerStr = 'Идентификатор (СНИЛС)';
              } else if (i.value[0] === '') {
                ownerStr =
                  'Идентификатор (ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН для ЮЛ/СНИЛС для ФЛ)';
              }
            }

            return i;
          });
          if (item.id === 44) {
            if (
              ownerStr === 'Идентификатор (ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН для ЮЛ/СНИЛС для ФЛ)'
            ) {
              item.blockItem.map((i) => {
                if ('hidden' in i && i.hidden !== undefined) {
                  i.hidden = true;
                  i.disabled = true;
                }
                return i;
              });
            }
            if (ownerStr === 'Идентификатор (СНИЛС)') {
              item.blockItem.map((i) => {
                if (
                  'hidden' in i &&
                  i.hidden !== undefined &&
                  i.name !== 'Полное наименование организации'
                ) {
                  i.hidden = false;
                  i.disabled = false;
                }
                if (
                  'hidden' in i &&
                  i.hidden !== undefined &&
                  (i.name === 'Полное наименование организации' ||
                    i.name === 'Страна' ||
                    i.name === 'Адрес электронной почты')
                ) {
                  i.hidden = true;
                  i.disabled = true;
                }
                return i;
              });
            }
            if (ownerStr === 'Идентификатор (ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН)') {
              item.blockItem.map((i) => {
                if ('hidden' in i && i.hidden !== undefined) {
                  i.hidden = false;
                  i.disabled = false;
                }
                return i;
              });
            }
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name.includes('Идентификатор')) {
                item.blockItem[z].name = ownerStr;
              }
            }
          }
          if (item.id === 31 || item.id === 32) {
            let checkGear = false;
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name === 'Число передач' && item.blockItem[z].value[0] !== '') {
                checkGear = false;
              } else if (
                item.blockItem[z].name === 'Число передач' &&
                item.blockItem[z].value[0] === ''
              ) {
                checkGear = true;
              }
              if (
                item.blockItem[z].name === 'Наименование передачи' ||
                item.blockItem[z].name === 'Вид передаточного числа' ||
                item.blockItem[z].name === 'Передаточное число'
              ) {
                item.blockItem[z].disabled = checkGear;
              }
            }
          }
          if (item.id === 27) {
            if ('check' in item && item.check !== undefined) {
              if (countTires > 0) {
                item.check = false;
              } else {
                item.check = true;
              }
            }
          }
		if(item.id === 30 || item.id === 31 || item.id === 32 || item.id === 33){
            item.blockItem.map(z => {
              if(z.name === "Передаточное число"){
                if(z.value[0].length > 5){
                  if((z.value[0].includes(",") || z.value[0].includes(".")) && z.value[0].length === 6){
      
                  }else{
                    if("error" in z && z.error !== null){
                      z.error = true;
                    }
                  }
                }
              }
            })
          }
		if (item.id === 47 || item.id === 40 || item.id === 0){
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].name === 'Мнемоника' &&
                item.blockItem[z].value[0] !== '' &&
                item.blockItem[z].value[0].includes('BY')
              ) {
                checkTNVED = true;
              }
              if(item.blockItem[z].name === 'Код ТН ВЭД' &&
              item.blockItem[z].value[0] !== ''){
                tnvedValue = item.blockItem[z].value[0];
              }
              item.blockItem.map(i => {
                if(i.name === 'Дополнительная информация' && checkTNVED && 'endAdornment' in i ){
                  i.endAdornment ="ТНВЭД " + tnvedValue;
                  if(tnvedValue === "" || tnvedValue === null){
                    i.endAdornment = ""
                  }
                }
                return i;
              })
              
            }

          }
          return item;
        });
        return items;
      })
    );
  };

  const handleRadio = (id: number, value: string) => {
    let max1 = 0;
    let max2 = 0;
    let max3 = 0;

    setBlocks(
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id === id) {
              i.name = value;
            }
            if (i.id > max1) {
              max1 = i.id;
            }
            return i;
          });
          if (item.id > max2) {
            max2 = item.id;
          }
          return { ...item };
        });
        if (items.id > max3) {
          max3 = items.id;
        }
        return { ...items };
      })
    );
    console.log(max1);
    console.log(max2);
    console.log(max3);
  };

  const onClickAdd = (id: number, group: number[] | undefined) => {
    if (group !== undefined) {
      let max = 0;
      blocks.map((items) =>
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id > max) max = i.id;
            return i;
          });
          return item;
        })
      );

      let maxCount: number = 0;
      let indexStart = null;
      let newGroup: number[] = [];
      let newGroupp: number[] = [];
      let counter = 0;
      let counterBlock = 0;

      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            indexStart = item.blockItem.map((el) => el.id).indexOf(group[0]);
            if (indexStart >= 0) {
              for (let z = 0; z < group.length; z++) {
                if (item.blockItem[z].type === 'checkbox') {
                  item.blockItem.splice(indexStart + z + group.length, 0, {
                    ...item.blockItem[z + indexStart],
                    id: max + 1,
                    value: ['false']
                  });
                } else {
                  item.blockItem.splice(indexStart + z + group.length, 0, {
                    ...item.blockItem[z + indexStart],
                    id: max + 1,
                    value: ['']
                  });
                }

                newGroup.push(max + 1);
                max++;
              }
              if (item.id === 27) {
                for (let z = 0; z < item.blockItem.length; z++) {
                  if (
                    item.blockItem[z].name === 'Двускатная шина' &&
                    item.blockItem[z].value[0] === 'true'
                  ) {
                    item.blockItem[z + 3].disabled = false;
                    item.blockItem[z + 4].disabled = false;
                  } else if (
                    item.blockItem[z].name === 'Двускатная шина' &&
                    (item.blockItem[z].value[0] === 'false' || item.blockItem[z].value[0] === '')
                  ) {
                    item.blockItem[z + 3].disabled = true;
                    item.blockItem[z + 4].disabled = true;
                  }
                }
              }
              item.blockItem.map((i) => {
                if ('count' in i && i.count !== undefined) {
                  if (
                    'countBlock' in i &&
                    i.countBlock !== undefined &&
                    counterBlock === i.countBlock
                  ) {
                    i.count = counter;
                    counter++;
                  } else {
                    counterBlock++;
                    counter = 0;
                    i.count = 0;
                    counter++;
                  }
                }
                return i;
              });
              if (item.id === 27) {
                for (let z = 0; z < item.blockItem.length; z++) {
                  if (item.blockItem[z].name === 'Двускатная шина' && item.blockItem[z].id === 96) {
                    item.blockItem[z + 3].disabled = !(item.blockItem[z].value[0] === 'true');
                    item.blockItem[z + 4].disabled = item.blockItem[z + 3].disabled;
                  } else if (
                    item.blockItem[z].name === 'Двускатная шина' &&
                    item.blockItem[z].value[0] === 'false'
                  ) {
                    item.blockItem[z + 3].disabled = false;
                    item.blockItem[z + 4].disabled = item.blockItem[z + 3].disabled;
                  } else if (
                    item.blockItem[z].name === 'Двускатная шина' &&
                    item.blockItem[z].value[0] === 'true'
                  ) {
                    item.blockItem[z + 3].disabled = !true;
                    item.blockItem[z + 4].disabled = item.blockItem[z + 3].disabled;
                  }
                }
              }
            }
            if (item.id === 12) {
              for (let z = 0; z < item.blockItem.length; z++) {
                if (z === 0) {
                  item.blockItem[z].disabled = true;
                } else item.blockItem[z].disabled = false;
              }
            }
            item.blockItem.map((i) => {
              if (i.id === id) {
                if ('buttons' in i && i.buttons !== undefined) {
                  i.buttons = [false, false];
                }
              }
              if (i.id === max) {
                if ('count' in i && i.count !== undefined) {
                  i.count = maxCount + 1;
                }
                if ('buttonAdd' in i) {
                  i.buttonAdd = true;
                }
                if ('buttonDelete' in i) {
                  i.buttonDelete = true;
                }
                i.checkbox = false;
                if ('group' in i && i.group !== undefined) {
                  for (let z = group.length - 1; z >= 0; z--) {
                    newGroupp[z] = max - z;
                  }
                  i.group = newGroupp.reverse();
                }
                if ('groupBlock' in i && i.group !== undefined && i.groupBlock !== undefined) {
                  for (let z = 0; z < newGroupp.length; z++) {
                    i.groupBlock.push(newGroupp[z]);
                  }
                }
              }
              return i;
            });
            return { ...item };
          });
          return { ...items };
        })
      );
      console.log(max);
    } else {
      let max = 0;
      blocks.map((items) =>
        items.blocksItem.map((item) => {
          item.blockItem.map((i) => {
            if (i.id > max) max = i.id;
            return i;
          });
          return item;
        })
      );
      let index = null;
      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            index = item.blockItem.map((el) => el.id).indexOf(id);
            if (index >= 0) {
              item.blockItem.splice(index + 1, 0, {
                ...item.blockItem[index],
                id: max + 1,
                value: ['']
              });
            }
            item.blockItem.map((i) => {
              if (i.id === max + 1) {
                if ('buttonAdd' in i) {
                  i.buttonAdd = true;
                }
                if ('buttonDelete' in i) {
                  i.buttonDelete = true;
                }
                i.checkbox = false;
              }
              return i;
            });
            return { ...item };
          });
          return { ...items };
        })
      );
      console.log(max);
    }
  };

  const onClickDelete = (id: number, group: number[] | undefined) => {
    let index: number | null = null;
    let buttons: boolean[];
    let counter: number = 0;
    let counterBlock: number = 0;

    if (group !== undefined) {
      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            index = item.blockItem.map((el) => el.id).indexOf(group[0]);
            if (index > 0) {
              item.blockItem.map((i) => {
                if ('count' in i && i.count !== undefined) {
                  if (
                    'countBlock' in i &&
                    i.countBlock !== undefined &&
                    counterBlock === i.countBlock
                  ) {
                    i.count = counter;
                    counter++;
                  } else {
                    counterBlock++;
                    counter = 0;
                    i.count = 0;
                    counter++;
                  }
                }
                return i;
              });
            }
            return item;
          });
          return items;
        })
      );

      blocks.map((items) =>
        items.blocksItem.map((item) => {
          index = item.blockItem.map((el) => el.id).indexOf(group[0]);
          if (index > 0) {
            item.blockItem.map((i) => {
              if (id === i.id) {
                if (
                  'count' in i &&
                  i.count !== undefined &&
                  'countBlock' in i &&
                  i.countBlock !== undefined &&
                  'buttons' in i &&
                  i.buttons !== undefined
                ) {
                  counter = i.count;
                  counterBlock = i.countBlock;
                  buttons = i.buttons;
                }
              }
              return i;
            });
          }
          return item;
        })
      );

      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            index = item.blockItem.map((el) => el.id).indexOf(group[0]);
            if (index > 0) {
              item.blockItem.splice(index, group.length);
              item.blockItem.map((i) => {
                if (
                  'count' in i &&
                  i.count !== undefined &&
                  'countBlock' in i &&
                  i.countBlock !== undefined &&
                  'buttons' in i &&
                  i.buttons !== undefined &&
                  buttons !== undefined
                ) {
                  if (buttons[0] !== false) {
                    if (counter - 1 === i.count && counterBlock === i.countBlock) {
                      i.buttons = buttons;
                    }
                  }
                }
                return i;
              });
            }

            return { ...item };
          });
          return { ...items };
        })
      );
    } else {
      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            index = item.blockItem.map((el) => el.id).indexOf(id);
            if (index > 0) {
              item.blockItem.splice(index, 1);
            }
            item.blockItem.map((i) => {
              return i;
            });
            return { ...item };
          });
          return { ...items };
        })
      );
    }
  };

  const onChangeBlock = (id: number) => {
    setBlocks(
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          if (item.id === id) {
            if ('check' in item) {
              item.check = !item.check;
            }
            item.blockItem.map((i) => {
              i.value = [''];
              return i;
            });
          }
          return item;
        });
        return items;
      })
    );
  };

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const alerts = (files: any, event?: any) => {
    if (files.length < 4 || files.length > 6) {
      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            if (item.id === 49) {
              item.blockItem.map((i) => {
                if ('pattern' in i && i.pattern !== undefined) {
                  i.pattern = 'Приложите от 4 до 6 файлов';
                }
                if ('files' in i && i.files !== undefined) {
                  i.files = [''];
                }
                return i;
              });
            }
            return item;
          });
          return items;
        })
      );
      alert('Приложите от 4 до 6 файлов');
      // event.preventDefault();
      return false;
    } else {
      for (let j = 0; j < files.length; j++) {
        if (files[j].size > 512 * 1024 * 8) {
          setBlocks(
            blocks.map((items) => {
              items.blocksItem.map((item) => {
                if (item.id === 49) {
                  item.blockItem.map((i) => {
                    if ('pattern' in i && i.pattern !== undefined) {
                      i.pattern = `Присутствуют файлы больше 512кб`;
                    }
                    return i;
                  });
                }
                return item;
              });
              return items;
            })
          );
          alert(`Файл ${files[j].name} больше 512кб`);
          // event.preventDefault();
          return false;
        } else {
          return true;
        }
      }
    }
  };

  const uploadImage = async (event: any, id: number) => {
    const files = event.target.files;
    if (alerts(files, event)) {
      let base64: any = [];
      let str: string[] = [];
      let filess: any = [];
      for (let item = 0; item < files.length; item++) {
        base64[item] = await convertBase64(event.target.files[item]);
        if (typeof base64[item] === 'string') {
          str[item] = base64[item] as string;
          filess[item] = files[item].name;
        }
        str[item] = str[item].split(',')[1];
      }
      setBlocks(
        blocks.map((items) => {
          items.blocksItem.map((item) => {
            item.blockItem.map((i) => {
              if (i.id === id) {
                i.value = str;
                if ('files' in i) {
                  i.files = filess;
                }
                if ('pattern' in i && i.pattern !== undefined) {
                  i.pattern = 'false';
                }
              }
              return i;
            });
            return item;
          });
          return items;
        })
      );
    } else {
      return;
    }
  };

  //функции получения данных из формы

  const getAxes = (num: string, check: boolean): string => {
    let str = '';
    let str2 = '';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 55) {
          str += `<trcdo:VehicleAxleDetails>`;
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].value[0].includes('ось') && item.blockItem[z].value[0] === num) {
              if (item.blockItem[z + 2].name === 'Колеса со сдвоенными шинами') {
                str2 += `<trsdo:DualTireAxleIndicator>${
                  item.blockItem[z + 2].value[0]
                }</trsdo:DualTireAxleIndicator>`;
              }
              if (item.blockItem[z + 3].name === 'Управляемая ось') {
                str2 += `<trsdo:SteeringAxleIndicator>${
                  item.blockItem[z + 3].value[0]
                }</trsdo:SteeringAxleIndicator>`;
              }
              if (item.blockItem[z + 4].name === 'Ведущая ось') {
                str2 += `<trsdo:DrivingAxleIndicator>${
                  item.blockItem[z + 4].value[0]
                }</trsdo:DrivingAxleIndicator>`;
              }
              if (item.blockItem[z + 5].name === 'Тормозная ось') {
                str2 += `<trsdo:BrakingAxleIndicator>${
                  item.blockItem[z + 5].value[0]
                }</trsdo:BrakingAxleIndicator>`;
              }

              str += `<trsdo:VehicleAxleOrdinal>${
                item.blockItem[z].value[0].split('-')[0]
              }</trsdo:VehicleAxleOrdinal>
              ${
                item.blockItem[z + 1].value[0] === ''
                  ? ''
                  : `<trsdo:VehicleTechnicallyPermissibleMaxWeightOnAxleMeasure measurementUnitCode="KGM">${
                      item.blockItem[z + 1].value[0]
                    }</trsdo:VehicleTechnicallyPermissibleMaxWeightOnAxleMeasure>`
              }
              ${str2}
              ${
                item.blockItem[z + 6].value[0] === ''
                  ? ''
                  : `<trsdo:VehicleAxleSweptPathMeasure measurementUnitCode="MMT">${
                      item.blockItem[z + 6].value[0]
                    }</trsdo:VehicleAxleSweptPathMeasure>`
              }
              `;
            }
          }
        }
        str2 = '';
        if (item.id === 27) {
          if (!check) {
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].value[0].includes('ось') &&
                item.blockItem[z].value[0] === num
              ) {
                if (
                  item.blockItem[z + 3].value[0] !== '' &&
                  item.blockItem[z + 4].value[0] !== '' &&
                  item.blockItem[z + 5].value[0] !== '' &&
                  item.blockItem[z + 6].value[0] !== ''
                ) {
                  str2 = `${item.blockItem[z + 3].value[0]}-${item.blockItem[z + 4].value[0]}/${
                    item.blockItem[z + 5].value[0]
                  }-${item.blockItem[z + 6].value[0]}`;
                } else if (
                  item.blockItem[z + 3].value[0] !== '' &&
                  item.blockItem[z + 4].value[0] === '' &&
                  item.blockItem[z + 5].value[0] !== '' &&
                  item.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${item.blockItem[z + 3].value[0]}/${item.blockItem[z + 5].value[0]}`;
                } else if (
                  item.blockItem[z + 3].value[0] !== '' &&
                  item.blockItem[z + 4].value[0] !== '' &&
                  item.blockItem[z + 5].value[0] === '' &&
                  item.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${item.blockItem[z + 3].value[0]}-${item.blockItem[z + 4].value[0]}/-`;
                } else if (
                  item.blockItem[z + 3].value[0] !== '' &&
                  item.blockItem[z + 4].value[0] === '' &&
                  item.blockItem[z + 5].value[0] === '' &&
                  item.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${item.blockItem[z + 3].value[0]}/-`;
                } else if (
                  item.blockItem[z + 3].value[0] === '' &&
                  item.blockItem[z + 4].value[0] === '' &&
                  item.blockItem[z + 5].value[0] !== '' &&
                  item.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `-/${item.blockItem[z + 5].value[0]}`;
                }

                str += `<trcdo:VehicleTyre>
                            <trsdo:VehicleTyreKindSize>${
                              item.blockItem[z + 1].value[0]
                            }</trsdo:VehicleTyreKindSize>
                            <trsdo:VehicleTyreKindIndex>${str2}</trsdo:VehicleTyreKindIndex>
                            <trsdo:VehicleTyreKindSpeed>${
                              item.blockItem[z + 7].value[0]
                            }</trsdo:VehicleTyreKindSpeed>
                            </trcdo:VehicleTyre>`;
              }
            }
          }
          str += `</trcdo:VehicleAxleDetails>`;
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getTransmissions = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        //трансмиссия
        if (item.id === 29 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTransmissionText>${item.blockItem[z].value[0]}</trsdo:VehicleTransmissionText>`;
            }
            if (
              item.blockItem[z].name === 'Схема трансмиссии' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:MachineTransmissionText>${item.blockItem[z].value[0]}</trsdo:MachineTransmissionText>`;
            }
          }
        }
        //Коробка передач
        if (item.id === 30 && 'check' in item && item.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>05</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Маркировка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${item.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Число передач вперед' &&
              item.blockItem[z].value[0] !== ''
            ) {
              if (
                !isNaN(parseInt(item.blockItem[z].value[0])) &&
                !isNaN(parseInt(item.blockItem[z + 1].value[0]))
              )
                str += `<trsdo:TransmissionUnitGearQuantity>${
                  parseInt(item.blockItem[z].value[0]) + parseInt(item.blockItem[z + 1].value[0])
                }</trsdo:TransmissionUnitGearQuantity>`;
              else if (!isNaN(parseInt(item.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  item.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
              else if (!isNaN(parseInt(item.blockItem[z + 1].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  item.blockItem[z + 1].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Наименование передачи' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (
              item.blockItem[z].name === 'Вид передаточного числа' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:TransmissionUnitGearType>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }
            if (
              item.blockItem[z].name === 'Передаточное число' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:TransmissionUnitGearRate>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
            }
            if (item.blockItem[z].name === 'Минимально' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:TransmissionUnitGearRate>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
            }
            if (item.blockItem[z].name === 'Максимально') {
              if (item.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRateMax>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRateMax>`;
              }
              if (item.blockItem[z - 4].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>05</trsdo:VehicleUnitKindCode><trcdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trcdo:VehicleComponentMakeName>`;
            } else if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Раздаточная коробка
        if (item.id === 31 && 'check' in item && item.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>10</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Маркировка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${item.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (item.blockItem[z].name === 'Число передач' && item.blockItem[z].value[0] !== '') {
              if (!isNaN(parseInt(item.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  item.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Наименование передачи' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (
              item.blockItem[z].name === 'Наименование передачи' &&
              item.blockItem[z].value[0] === '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trcdo:TransmissionUnitGearDetails>`;
            }
            if (
              item.blockItem[z].name === 'Вид передаточного числа' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trsdo:TransmissionUnitGearType>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }

            if (
              item.blockItem[z].name === 'Передаточное число' &&
              item.blockItem[z].disabled !== true
            ) {
              if (item.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRate>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (item.blockItem[z - 2].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trsdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Главная передача
        if (item.id === 32 && 'check' in item && item.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>15</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Распределение по осям' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:AxisDistribution>${item.blockItem[z].value[0]}</trsdo:AxisDistribution>`;
            }
            if (item.blockItem[z].name === 'Марка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Маркировка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${item.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (item.blockItem[z].name === 'Число передач' && item.blockItem[z].value[0] !== '') {
              if (!isNaN(parseInt(item.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  item.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Наименование передачи' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (
              item.blockItem[z].name === 'Наименование передачи' &&
              item.blockItem[z].value[0] === '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trcdo:TransmissionUnitGearDetails>`;
            }
            if (
              item.blockItem[z].name === 'Вид передаточного числа' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].disabled !== true
            ) {
              str += `<trsdo:TransmissionUnitGearType>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }

            if (
              item.blockItem[z].name === 'Передаточное число' &&
              item.blockItem[z].disabled !== true
            ) {
              if (item.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRate>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (item.blockItem[z - 2].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (
              item.blockItem[z].name === 'Распределение по осям' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>15</trsdo:VehicleUnitKindCode><trsdo:AxisDistribution>${item.blockItem[z].value[0]}</trsdo:AxisDistribution>`;
            } else if (
              item.blockItem[z].name === 'Распределение по осям' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Вал отбора мощности
        if (item.id === 33 && 'check' in item && item.check === false) {
          if (
            item.blockItem[0].value[0] !== '' ||
            item.blockItem[1].value[0] !== '' ||
            item.blockItem[2].value[0] !== '' ||
            item.blockItem[3].value[0] !== ''
          ) {
            str +=
              '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>20</trsdo:VehicleUnitKindCode><trcdo:VehiclePowerTakeOffDetails>';
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].name === 'Тип' &&
                item.blockItem[z].value[0] !== '' &&
                z === 0
              ) {
                str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
              }
              if (item.blockItem[z].name === 'Расположение' && item.blockItem[z].value[0] !== '') {
                str += `<trsdo:VehicleComponentLocationText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
              }
              if (
                item.blockItem[z].name === 'Частота вращения' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<trsdo:VehicleShaftRotationFrequencyMeasure measurementUnitCode="RPM">${item.blockItem[z].value[0]}</trsdo:VehicleShaftRotationFrequencyMeasure>`;
              }
              if (
                item.blockItem[z].name ===
                  'Отношение к частоте вращения двигателя вала отбора мощности' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<trsdo:TransmissionUnitGearRate>${item.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (
                item.blockItem[z].name === 'Тип' &&
                item.blockItem[z].value[0] !== '' &&
                z !== 0
              ) {
                str += `</trcdo:VehiclePowerTakeOffDetails></trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>20</trsdo:VehicleUnitKindCode><trcdo:VehiclePowerTakeOffDetails><trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
              }
		    if (
                item.blockItem[z].name === 'Тип' &&
                item.blockItem[z].value[0] === '' &&
                z !== 0 &&
                (item.blockItem[z + 1].value[0] !== '' ||
                  item.blockItem[z + 2].value[0] !== '' ||
                  item.blockItem[z + 3].value[0] !== '')
              ) {
                str += `</trcdo:VehiclePowerTakeOffDetails></trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>20</trsdo:VehicleUnitKindCode><trcdo:VehiclePowerTakeOffDetails>`;
              }
            }
            str += '</trcdo:VehiclePowerTakeOffDetails></trcdo:TransmissionUnitDetails>';
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getSuspension = (): string => {
    let str = '';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 35 && 'check' in item && item.check === false) {
          str += '<trcdo:VehicleSuspensionDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Вид подвески' && z === 0) {
              str += `<trsdo:VehicleSuspensionKindCode>${
                suspension[item.blockItem[z].value[0]]
              }</trsdo:VehicleSuspensionKindCode>`;
            }
            if (item.blockItem[z].name === 'Описание' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:VehicleSuspensionDetails>`;
            } else if (item.blockItem[z].name === 'Описание' && item.blockItem[z].value[0] === '') {
              str += `</trcdo:VehicleSuspensionDetails>`;
            }
            if (item.blockItem[z].name === 'Вид подвески' && z !== 0) {
              str += `<trcdo:VehicleSuspensionDetails><trsdo:VehicleSuspensionKindCode>${
                suspension[item.blockItem[z].value[0]]
              }</trsdo:VehicleSuspensionKindCode>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getSteering = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 36 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Положение рулевого колеса' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z + 1].value[0] !== ''
            ) {
              str += '<trcdo:VehicleSteeringDetails>';
              str += `<trsdo:VehicleComponentText>${
                item.blockItem[z + 1].value[0]
              }</trsdo:VehicleComponentText><trsdo:SteeringWheelPositionCode>${
                steeringType[item.blockItem[z].value[0]]
              }</trsdo:SteeringWheelPositionCode><trsdo:VehicleComponentLocationText>${
                item.blockItem[z].value[0]
              }</trsdo:VehicleComponentLocationText>`;
              str += '</trcdo:VehicleSteeringDetails>';
            } else if (
              item.blockItem[z].name === 'Положение рулевого колеса' &&
              item.blockItem[z].value[0] === '' &&
              item.blockItem[z + 1].value[0] !== ''
            ) {
              str += '<trcdo:VehicleSteeringDetails>';
              str += `<trsdo:VehicleComponentText>${
                item.blockItem[z + 1].value[0]
              }</trsdo:VehicleComponentText>`;
              str += '</trcdo:VehicleSteeringDetails>';
            } else if (
              item.blockItem[z].name === 'Положение рулевого колеса' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z + 1].value[0] === ''
            ) {
              str += '<trcdo:VehicleSteeringDetails>';
              str += `<trsdo:SteeringWheelPositionCode>${
                steeringType[item.blockItem[z].value[0]]
              }</trsdo:SteeringWheelPositionCode><trsdo:VehicleComponentLocationText>${
                item.blockItem[z].value[0]
              }</trsdo:VehicleComponentLocationText>`;
              str += '</trcdo:VehicleSteeringDetails>';
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getTyreKindIndex = (): string[] => {
    let str: string[] = [];
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 27) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Размерность') {
              if (
                item.blockItem[z + 2].value[0] !== '' &&
                item.blockItem[z + 3].value[0] !== '' &&
                item.blockItem[z + 4].value[0] !== '' &&
                item.blockItem[z + 5].value[0] !== ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${item.blockItem[z + 2].value[0]}-${
                    item.blockItem[z + 3].value[0]
                  }/${item.blockItem[z + 4].value[0]}-${
                    item.blockItem[z + 5].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                item.blockItem[z + 2].value[0] !== '' &&
                item.blockItem[z + 3].value[0] === '' &&
                item.blockItem[z + 4].value[0] !== '' &&
                item.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${item.blockItem[z + 2].value[0]}/${
                    item.blockItem[z + 4].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                item.blockItem[z + 2].value[0] !== '' &&
                item.blockItem[z + 3].value[0] !== '' &&
                item.blockItem[z + 4].value[0] === '' &&
                item.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${item.blockItem[z + 2].value[0]}-${
                    item.blockItem[z + 3].value[0]
                  }/-</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                item.blockItem[z + 2].value[0] !== '' &&
                item.blockItem[z + 3].value[0] === '' &&
                item.blockItem[z + 4].value[0] === '' &&
                item.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${
                    item.blockItem[z + 2].value[0]
                  }/-</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                item.blockItem[z + 2].value[0] === '' &&
                item.blockItem[z + 3].value[0] === '' &&
                item.blockItem[z + 4].value[0] !== '' &&
                item.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>-/${
                    item.blockItem[z + 4].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else str.push('');
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getTyre = (check: boolean): string => {
    let str = '';
    let str2 = [];
    if (check !== false)
      blocks.map((items) => {
        items.blocksItem.map((item) => {
          if (item.id === 27 && 'check' in item && item.check === false) {
            str += `<trcdo:VehicleTyreKindInfo>`;
            str2 = getTyreKindIndex();
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].name === 'Размерность' &&
                item.blockItem[z].value[0] !== '' &&
                z === 2
              ) {
                str += `<trsdo:VehicleTyreKindSize>${item.blockItem[z].value[0]}</trsdo:VehicleTyreKindSize>`;
                str += `${str2.shift()}`;
              } else if (
                item.blockItem[z].name === 'Размерность' &&
                item.blockItem[z].value[0] === '' &&
                z === 2
              ) {
                str += `${str2.shift()}`;
              }
              if (
                item.blockItem[z].name === 'Скоростная категория (множественный выбор)' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<trsdo:VehicleTyreKindSpeed>${item.blockItem[z].value}</trsdo:VehicleTyreKindSpeed>`;
              }
              if (
                item.blockItem[z].name === 'Шина временного использования' &&
                item.blockItem[z].name !== ''
              ) {
                str += `<trsdo:IsSupplementVehicleTyre>${
                  item.blockItem[z].value[0] === '' || item.blockItem[z].value[0] === 'false'
                    ? 'false'
                    : 'true'
                }</trsdo:IsSupplementVehicleTyre>`;
              }
              if (
                item.blockItem[z].name === 'Размерность' &&
                item.blockItem[z].value[0] !== '' &&
                z !== 2
              ) {
                str += `</trcdo:VehicleTyreKindInfo><trcdo:VehicleTyreKindInfo><trsdo:VehicleTyreKindSize>${item.blockItem[z].value[0]}</trsdo:VehicleTyreKindSize>`;
                str += `${str2.shift()}`;
              } else if (
                item.blockItem[z].name === 'Размерность' &&
                item.blockItem[z].value[0] === '' &&
                z !== 2
              ) {
                str += '</trcdo:VehicleTyreKindInfo><trcdo:VehicleTyreKindInfo>';
                str += `${str2.shift()}`;
              }
            }
            str += `</trcdo:VehicleTyreKindInfo>`;
          }
          return item;
        });
        return items;
      });

    return str;
  };

  const getOverallDimension = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 9) {
          str += '<trcdo:VehicleOverallDimensionDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Длина' && item.blockItem[z].value[0] !== '') {
              str += `<csdo:LengthMeasure measurementUnitCode="MMT">${item.blockItem[z].value[0]}</csdo:LengthMeasure>`;
            }
            if (item.blockItem[z].name === 'Ширина' && item.blockItem[z].value[0] !== '') {
              str += `<csdo:WidthMeasure measurementUnitCode="MMT">${item.blockItem[z].value[0]}</csdo:WidthMeasure>`;
            }
            if (item.blockItem[z].name === 'Высота' && item.blockItem[z].value[0] !== '') {
              str += `<csdo:HeightMeasure measurementUnitCode="MMT">${item.blockItem[z].value[0]}</csdo:HeightMeasure>`;
            }
          }
          str += '</trcdo:VehicleOverallDimensionDetails>';
        }
        return item;
      });
      return items;
    });
    if (str === '<trcdo:VehicleOverallDimensionDetails></trcdo:VehicleOverallDimensionDetails>')
      str = '';
    return str;
  };

  const getTrailer = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 14) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Буксировка прицепа') {
              str += `<trsdo:NotVehicleTrailerIndicator>${item.blockItem[z].value[0]}</trsdo:NotVehicleTrailerIndicator>`;
            }
            if (
              item.blockItem[z].name === 'Масса прицепа без тормозной системы' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleMaxUnbrakedTrailerWeightMeasure measurementUnitCode="KGM">${item.blockItem[z].value[0]}</trsdo:VehicleMaxUnbrakedTrailerWeightMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Масса прицепа с тормозной системой' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleMaxBrakedTrailerWeightMeasure measurementUnitCode="KGM">${item.blockItem[z].value[0]}</trsdo:VehicleMaxBrakedTrailerWeightMeasure>`;
            }
            if (
              item.blockItem[z].name ===
                'Технически допустимая статическая вертикальная нагрузка в точке сцепки тягово-сцепного устройства' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleHitchLoadMeasure measurementUnitCode="KGM">${item.blockItem[z].value[0]}</trsdo:VehicleHitchLoadMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Техническая допустимая буксируемая масса' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:PermissibleTowableWeightMeasure measurementUnitCode="KGM">${item.blockItem[z].value[0]}</trsdo:PermissibleTowableWeightMeasure>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getFuel = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 18 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Топливо' && item.blockItem[z].value[0] !== '') {
              for (let j = 0; j < item.blockItem[z].value.length; j++) {
                str += `<trsdo:VehicleFuelKindCode>${
                  fuelType[item.blockItem[z].value[j]]
                }</trsdo:VehicleFuelKindCode>
                                 <trsdo:VehicleFuelKindName>${
                                   item.blockItem[z].value[j]
                                 }</trsdo:VehicleFuelKindName>`;
              }
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getFuelFeed = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 19 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Тип системы питания' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:FuelFeedDetails><trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:FuelFeedDetails>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getIgnition = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 21 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Тип системы зажигания' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:VehicleIgnitionDetails><trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:VehicleIgnitionDetails>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getExhaust = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 22 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trcdo:ExhaustDetails><trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:ExhaustDetails>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getVoltage = (): string => {
    let str = '';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 26 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Номинальное напряжение' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleVoltageMeasure measurementUnitCode="VLT">${item.blockItem[z].value[0]}</trsdo:VehicleVoltageMeasure>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getMaxSpeed = (): string => {
    let str = '';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 38) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Максимальная скорость' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleMaxSpeedMeasure measurementUnitCode="KMH">${item.blockItem[z].value[0]}</trsdo:VehicleMaxSpeedMeasure>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getBrakingSystem = (): string => {
    let str = '';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 37 && 'check' in item && item.check === false) {
          str += '<trcdo:VehicleBrakingSystemDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleBrakingSystemKindCode>${
                brakingType[item.blockItem[z].value[0]]
              }</trsdo:VehicleBrakingSystemKindCode>`;
            }
            if (item.blockItem[z].name === 'Описание' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleBrakingSystemDetails><trcdo:VehicleBrakingSystemDetails><trsdo:VehicleBrakingSystemKindCode>${
                brakingType[item.blockItem[z].value[0]]
              }</trsdo:VehicleBrakingSystemKindCode>`;
            } else if (
              item.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleBrakingSystemDetails><trcdo:VehicleBrakingSystemDetails>`;
            }
          }
          str += '</trcdo:VehicleBrakingSystemDetails>';
        }
        return item;
      });
      return items;
    });

    if (str === '<trcdo:VehicleBrakingSystemDetails></trcdo:VehicleBrakingSystemDetails>') str = '';
    return str;
  };

  const getEngineQuantity = (): string => {
    let str = '';
    let count = 0;
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 16 || item.id === 17 || item.id === 23 || item.id === 24) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Марка' && item.blockItem[z].value[0] !== '') {
              count++;
            }
          }
        }
        return item;
      });
      return items;
    });
    str += `<trsdo:EngineQuantity>${count}</trsdo:EngineQuantity>`;
    return str;
  };

  const getEngine = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 16 && 'check' in item && item.check === false) {
          str += '<trcdo:EngineDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Количество цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderQuantity>${item.blockItem[z].value[0]}</trsdo:EngineCylinderQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Расположение цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderArrangementText>${item.blockItem[z].value[0]}</trsdo:EngineCylinderArrangementText>`;
            }
            if (
              item.blockItem[z].name === 'Рабочий объем цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCapacityMeasure measurementUnitCode="CMQ">${item.blockItem[z].value[0]}</trsdo:EngineCapacityMeasure>`;
            }
            if (item.blockItem[z].name === 'Степень сжатия' && item.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineCompressionRate>${item.blockItem[z].value[0]}</trcdo:EngineCompressionRate>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxPowerDetails>
                            <csdo:EngineMaxPowerMeasure measurementUnitCode="KWT" measurementUnitCodeListId="NSI_033">${item.blockItem[z].value[0]}</csdo:EngineMaxPowerMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              (item.blockItem[z + 1].value[0] !== '' || item.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (item.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 1].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (item.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 2].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxPowerDetails>`;
            } else if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === ''
            ) {
              str += `</trcdo:EngineMaxPowerDetails>`;
            }

            if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxTorqueDetails>
                            <trsdo:EngineMaxTorqueMeasure measurementUnitCode="NMT">${item.blockItem[z].value[0]}</trsdo:EngineMaxTorqueMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              (item.blockItem[z + 1].value[0] !== '' || item.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (item.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 1].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (item.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 2].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxTorqueDetails>`;
            } else if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === '' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += ``;
            } else if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === '' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `</trcdo:EngineMaxTorqueDetails>`;
            }

            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails><trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails>`;
            }
          }
          str += '</trcdo:EngineDetails>';
        }
        if (item.id === 23 && 'check' in item && item.check === false) {
          str += '<trcdo:EngineDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Количество цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderQuantity>${item.blockItem[z].value[0]}</trsdo:EngineCylinderQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Расположение цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderArrangementText>${item.blockItem[z].value[0]}</trsdo:EngineCylinderArrangementText>`;
            }
            if (
              item.blockItem[z].name === 'Рабочий объем цилиндров' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCapacityMeasure measurementUnitCode="CMQ">${item.blockItem[z].value[0]}</trsdo:EngineCapacityMeasure>`;
            }
            if (item.blockItem[z].name === 'Степень сжатия' && item.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineCompressionRate>${item.blockItem[z].value[0]}</trcdo:EngineCompressionRate>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxPowerDetails>
                            <csdo:EngineMaxPowerMeasure measurementUnitCode="KWT" measurementUnitCodeListId="NSI_033">${item.blockItem[z].value[0]}</csdo:EngineMaxPowerMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              (item.blockItem[z + 1].value[0] !== '' || item.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (item.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 1].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (item.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 2].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxPowerDetails>`;
            } else if (
              item.blockItem[z].name === 'Максимальная мощность' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === ''
            ) {
              str += `</trcdo:EngineMaxPowerDetails>`;
            }

            if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxTorqueDetails>
                            <trsdo:EngineMaxTorqueMeasure measurementUnitCode="NMT">${item.blockItem[z].value[0]}</trsdo:EngineMaxTorqueMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              (item.blockItem[z + 1].value[0] !== '' || item.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (item.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 1].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (item.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${
                  item.blockItem[z + 2].value[0]
                }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxTorqueDetails>`;
            } else if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === '' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += ``;
            } else if (
              item.blockItem[z].name === 'Максимальный крутящий момент' &&
              item.blockItem[z + 1].value[0] === '' &&
              item.blockItem[z + 2].value[0] === '' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `</trcdo:EngineMaxTorqueDetails>`;
            }

            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails><trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails>`;
            }
          }
          str += '</trcdo:EngineDetails>';
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getEngineLocation = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 7) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name ===
                'Положение и размещение приводного двигателя (двигателей)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              for (let j = 0; j < item.blockItem[z].value.length; j++) {
                str += `<trsdo:VehicleComponentLocationText>${item.blockItem[z].value[j]}</trsdo:VehicleComponentLocationText>`;
              }
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getElectricalEngine = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 24 && 'check' in item && item.check === false) {
          str +=
            '<trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${item.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Рабочее напряжение' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${item.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>
                            <trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode><trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        if (item.id === 17 && 'check' in item && item.check === false) {
          str +=
            '<trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${item.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Рабочее напряжение' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${item.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Марка' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>
                            <trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode><trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getElectricalMachine = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 34 && 'check' in item && item.check === false) {
          str += '<trcdo:VehicleElectricalMachineDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Вид электромашины' &&
              item.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:ElectricalMachineKindCode>${
                electricalMachineType[item.blockItem[z].value[0]]
              }</trsdo:ElectricalMachineKindCode>`;
            }
            if (item.blockItem[z].name === 'Марка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentMakeName>${item.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${item.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Рабочее напряжение' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${item.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (
              item.blockItem[z].name === 'Вид электромашины' &&
              item.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>${
                electricalMachineType[item.blockItem[z].value[0]]
              }</trsdo:ElectricalMachineKindCode>`;
            } else if (
              item.blockItem[z].name === 'Вид электромашины' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        return item;
      });
      return items;
    });
    if (str === '<trcdo:VehicleElectricalMachineDetails></trcdo:VehicleElectricalMachineDetails>')
      str = '';
    return str;
  };

  const getMass = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 12) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Вид массы' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleMassMeasure measurementUnitCode="KGM" vehicleMassCode="${
                massType[item.blockItem[z].value[0]]
              }">${item.blockItem[z + 1].value[0]}</trsdo:VehicleMassMeasure>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getECUModel = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 20 && 'check' in item && item.check === false) {
          if (item.blockItem[0].value[0] !== '') {
            str += `<trsdo:ECUModelCode>${item.blockItem[0].value[0]}</trsdo:ECUModelCode>`;
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getIdInfo = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 1) {
          str += '<trcdo:VehicleIdInfoDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              (item.blockItem[z].name === 'Идентификационный номер' ||
                item.blockItem[z].name === 'Заводской номер') &&
              item.blockItem[z].value[0] !== '' &&
              z === 1
            ) {
              str += `<trcdo:VehicleIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                            </trcdo:VehicleIdDetails>`;
            } else if (
              (item.blockItem[z].name === 'Идентификационный номер' ||
                item.blockItem[z].name === 'Заводской номер') &&
              item.blockItem[z].value[0] === '' &&
              z === 1
            ) {
              str += `<trcdo:VehicleIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                            </trcdo:VehicleIdDetails>`;
            }
            if (
              item.blockItem[z].name === 'Номер двигателя' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].id === 9
            ) {
              str += `<trcdo:VehicleEngineIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEngineIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер двигателя' &&
              item.blockItem[z].value[0] === '' &&
              item.blockItem[z].id === 9
            ) {
              str += `<trcdo:VehicleEngineIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEngineIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер двигателя' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].id !== 9
            ) {
              str = insert(
                str,
                `<trcdo:VehicleEngineIdDetails>
                        <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                        <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEngineIdDetails>`,
                str.lastIndexOf(`</trcdo:VehicleEngineIdDetails>`) +
                  `</trcdo:VehicleEngineIdDetails>`.length
              );
            }
            if (
              item.blockItem[z].name === 'Номер кузова (кабины, прицепа, рамы)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:MachineBodyIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MachineBodyIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер кузова (кабины, прицепа, рамы)' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:MachineBodyIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MachineBodyIdDetails>`;
            }
            if (
              item.blockItem[z].name === 'Номер коробки передач' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:GearboxIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:GearboxIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер коробки передач' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:GearboxIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:GearboxIdDetails>`;
            }
            if (
              item.blockItem[z].name === 'Номер основного ведущего моста' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].id === 12
            ) {
              str += `<trcdo:MainPoweredAxleIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MainPoweredAxleIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер основного ведущего моста' &&
              item.blockItem[z].value[0] === '' &&
              item.blockItem[z].id === 12
            ) {
              str += `<trcdo:MainPoweredAxleIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MainPoweredAxleIdDetails>`;
            } else if (
              item.blockItem[z].name === 'Номер основного ведущего моста' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].id !== 12
            ) {
              str = insert(
                str,
                `<trcdo:MainPoweredAxleIdDetails>
                <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
            </trcdo:MainPoweredAxleIdDetails>`,
                str.lastIndexOf(`</trcdo:MainPoweredAxleIdDetails>`) +
                  `</trcdo:MainPoweredAxleIdDetails>`.length
              );
            }
          }
        }
        if (item.id === 41) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name ===
                'Сведения об идентификационном номере устройства вызова экстренных оперативных служб' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:VehicleEmergencyCallDeviceIdDetails>
                            <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEmergencyCallDeviceIdDetails>`;
            } else if (
              item.blockItem[z].name ===
                'Сведения об идентификационном номере устройства вызова экстренных оперативных служб' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:VehicleEmergencyCallDeviceIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEmergencyCallDeviceIdDetails>`;
            }
            if (
              item.blockItem[z].name ===
                'Сведения об идентификационном номере аппаратуры спутниковой навигации' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:VehicleSatelliteNavigationIdDetails>
                        <trsdo:VehicleIdentityNumberId>${item.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                        <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                    </trcdo:VehicleSatelliteNavigationIdDetails>`;
            } else if (
              item.blockItem[z].name ===
                'Сведения об идентификационном номере аппаратуры спутниковой навигации' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:VehicleSatelliteNavigationIdDetails>
                        <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                    </trcdo:VehicleSatelliteNavigationIdDetails>`;
            }
          }
          str += '</trcdo:VehicleIdInfoDetails>';
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getVehicleDetails = (): string => {
    let str = '';
    str += '<trcdo:VehicleDetails>';
    str += getIdInfo();
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 0) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Категория в соответствии с Правилами оформления' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:MachineCategoryCode>${
                categoryId[item.blockItem[z].value[0]]
              }</trsdo:MachineCategoryCode>`;
            }
          }
        }
        if (item.id === 1) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name ===
                'Наименование, определяемое назначением самоходной машины (другого вида техники) ' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleCharacteristicsName>${item.blockItem[z].value[0]}</trsdo:VehicleCharacteristicsName>`;
            }
            if (
              item.blockItem[z].name === 'Цвет кузова (кабины, прицепа)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              for (let j = 0; j < item.blockItem[z].value.length; j++) {
                str += `<trsdo:VehicleBodyColourCode>${
                  color[item.blockItem[z].value[j]]
                }</trsdo:VehicleBodyColourCode>`;
              }
            }
            if (
              item.blockItem[z].name ===
                'Признак комбинированного цвета кузова (кабины, прицепа)' &&
              item.blockItem[z - 1].value.length > 1
            ) {
              str += `<trsdo:BodyMultiColourIndicator>true</trsdo:BodyMultiColourIndicator>`;
            } else if (
              item.blockItem[z].name ===
                'Признак комбинированного цвета кузова (кабины, прицепа)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:BodyMultiColourIndicator>${item.blockItem[z].value[0]}</trsdo:BodyMultiColourIndicator>`;
            }
            if (
              item.blockItem[z].name === 'Наименование оттенка цвета кузова (кабины, прицепа)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleBodyColourName>${item.blockItem[z].value[0]}</trsdo:VehicleBodyColourName>`;
            }
            if (
              item.blockItem[z].name === 'Год изготовления' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<csdo:ManufactureYear>${item.blockItem[z].value[0]}</csdo:ManufactureYear>`;
            }
            if (
              item.blockItem[z].name === 'Месяц изготовления' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<csdo:ManufactureMonth>--${
                month[item.blockItem[z].value[0]]
              }</csdo:ManufactureMonth>`;
            }
            if (item.blockItem[z].name === 'Страна вывоза' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleImportCountryCode codeListId="NSI_034">${
                country[item.blockItem[z].value[0]]
              }</trsdo:VehicleImportCountryCode>`;
            }
          }
        }
        if (item.id === 39) {
          if (
            item.blockItem[0].name === 'Информация изготовителя' &&
            item.blockItem[0].value[0] !== ''
          ) {
            str += `<csdo:NoteText>${item.blockItem[0].value[0]}</csdo:NoteText>`;
          }
        }
        return item;
      });
      return items;
    });

    str += '</trcdo:VehicleDetails>';
    return str;
  };

  const getPowerStorage = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 60 && 'check' in item && item.check === false) {
          str += '<trcdo:PowerStorageDeviceDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Место расположения' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleComponentLocationText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
            }
            if (item.blockItem[z].name === 'Запас хода' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleRangeMeasure measurementUnitCode="KM">${item.blockItem[z].value[0]}</trsdo:VehicleRangeMeasure>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:PowerStorageDeviceDetails><trcdo:PowerStorageDeviceDetails><trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            } else if (
              item.blockItem[z].name === 'Тип' &&
              item.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:PowerStorageDeviceDetails><trcdo:PowerStorageDeviceDetails>`;
            }
          }
          str += `</trcdo:PowerStorageDeviceDetails>`;
        }
        return item;
      });
      return items;
    });
    if (str === '<trcdo:PowerStorageDeviceDetails></trcdo:PowerStorageDeviceDetails>') str = '';
    return str;
  };

  // const getDocumentDetails = (): string => {
  //   let str = '';

  //   blocks.map((items) => {
  //     items.blocksItem.map((item) => {
  //       if (item.id === 43) {
  //         str +=
  //           '<trsdo:VehicleEPassportRegistrationReasonCode>01</trsdo:VehicleEPassportRegistrationReasonCode><trcdo:OwnerDocDetails>';
  //         for (let z = 0; z < item.blockItem.length; z++) {
  //           if (
  //             item.blockItem[z].name === 'Наименование документа' &&
  //             item.blockItem[z].value[0] !== ''
  //           ) {
  //             str += `<csdo:DocKindCode codeListId="NSI_113">2</csdo:DocKindCode><csdo:DocKindName>${item.blockItem[z].value[0]}</csdo:DocKindName>`;
  //           }
  //           if (item.blockItem[z].name === 'Номер документа' && item.blockItem[z].value[0] !== '') {
  //             str += `<csdo:DocId>${item.blockItem[z].value[0]}</csdo:DocId>`;
  //           }
  //           if (item.blockItem[z].name === 'Дата документа' && item.blockItem[z].value[0] !== '') {
  //             str += `<csdo:DocCreationDate>${item.blockItem[z].value[0]}+03:00</csdo:DocCreationDate>`;
  //           }
  //           if (item.blockItem[z].name === 'Кем выдано' && item.blockItem[z].value[0] !== '') {
  //             str += `<csdo:AuthorityName>${item.blockItem[z].value[0]}</csdo:AuthorityName>`;
  //           }
  //           if (
  //             item.blockItem[z].name === 'Количество страниц' &&
  //             item.blockItem[z].value[0] !== ''
  //           ) {
  //             str += `<csdo:PageQuantity>${item.blockItem[z].value[0]}</csdo:PageQuantity>`;
  //           }
  //         }
  //         str += '</trcdo:OwnerDocDetails>';
  //       }
  //       return item;
  //     });
  //     return items;
  //   });

  //   return str;
  // };

  const getVehicleTypeDetails = (): string => {
    let str = '';
    str += '<trcdo:VehicleTypeDetails>';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 0) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Марка' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:NotVehicleMakeNameIndicator>false</trsdo:NotVehicleMakeNameIndicator>
                            <csdo:VehicleMakeName>${
                              item.blockItem[z].value[0]
                            }</csdo:VehicleMakeName>
                            <trsdo:VehicleMakeCode>${
                              brands[item.blockItem[z].value[0]]
                                ? brands[item.blockItem[z].value[0]]
                                : item.blockItem[z + 1].value[0]
                            }</trsdo:VehicleMakeCode>`;
            } else if (item.blockItem[z].name === 'Марка' && item.blockItem[z].value[0] === '') {
              str += `<trsdo:NotVehicleMakeNameIndicator>true</trsdo:NotVehicleMakeNameIndicator>`;
            }
            if (
              item.blockItem[z].name === 'Коммерческое наименование' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:NotVehicleCommercialNameIndicator>false</trsdo:NotVehicleCommercialNameIndicator>
                            <csdo:VehicleCommercialName>${item.blockItem[z].value[0]}</csdo:VehicleCommercialName>`;
            } else if (
              item.blockItem[z].name === 'Коммерческое наименование' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trsdo:NotVehicleCommercialNameIndicator>true</trsdo:NotVehicleCommercialNameIndicator>`;
            }
            if (item.blockItem[z].name === 'Тип' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTypeId>${item.blockItem[z].value[0]}</trsdo:VehicleTypeId>`;
            }
            if (
              item.blockItem[z].name ===
                'Категория в соответствии с ТР ТС 031/2012 или ТР ТС 010/2011 или ТР ТС 018/2011 ' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:MachineTechCategoryCode>${item.blockItem[z].value[0]}</trsdo:MachineTechCategoryCode>`;
            }
          }
        }
        if (item.id === 1) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Тип движителя' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:PropulsionKindCode>${
                typePropulsion[item.blockItem[z].value[0]]
              }</trsdo:PropulsionKindCode>
                            <trsdo:PropulsionKindName>${
                              item.blockItem[z].value[0]
                            }</trsdo:PropulsionKindName>`;
            }
            if (
              item.blockItem[z].name === 'Сведения о наличии реверсивного места оператора' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ReversibleControlIndicator>${item.blockItem[z].value[0]}</trsdo:ReversibleControlIndicator>`;
            }
          }
        }
        if (item.id === 7) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Схема компоновки' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleLayoutPatternText>${item.blockItem[z].value[0]}</trsdo:VehicleLayoutPatternText>`;
            }
          }
        }
        if (item.id === 49) {
          for (let z = 0; z < item.blockItem[0].value.length; z++) {
            if ('files' in item.blockItem[0])
              if (item.blockItem[0].value[0] !== '')
                str += `<trsdo:VehiclePicture fileName="${item.blockItem[0].files[z]}">${item.blockItem[0].value[z]}</trsdo:VehiclePicture>`;
          }
        }
        return item;
      });
      return items;
    });
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 15 && 'check' in item && item.check === false) {
          if (item.blockItem[0].value[0] !== '')
            str += `<trsdo:VehicleHybridDesignText>${item.blockItem[0].value[0]}</trsdo:VehicleHybridDesignText>`;
        }
        return item;
      });
      return items;
    });

    str += getLabeling();
    str += '</trcdo:VehicleTypeDetails>';
    return str;
  };

  const getLabeling = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 2 && 'check' in item && item.check === false) {
          str += `<trcdo:VehicleLabelingDetails>`;
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z + 1].name !== 'Место расположения таблички изготовителя'
            ) {
              str += `<trsdo:VehicleComponentLocationText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>
                            <trsdo:NotManufacturerPlateIndicator>false</trsdo:NotManufacturerPlateIndicator>`;
            } else if (
              item.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z + 1].name === 'Место расположения таблички изготовителя'
            ) {
              str += `<trsdo:VehicleComponentLocationText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
            } else if (
              item.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trsdo:NotManufacturerPlateIndicator>true</trsdo:NotManufacturerPlateIndicator>`;
            }
            if (
              item.blockItem[z].name ===
                'Место расположения идентификационного номера самоходной машины (другого вида техники)' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleIdentificationNumberLocationText>${item.blockItem[z].value[0]}</trsdo:VehicleIdentificationNumberLocationText>`;
            }
          }
        }
        if (item.id === 2 && 'check' in item && item.check === true) {
          str += `<trcdo:VehicleLabelingDetails><trsdo:NotManufacturerPlateIndicator>true</trsdo:NotManufacturerPlateIndicator>`;
        }
        if (item.id === 4 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Место расположения номера двигателя' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineIdentificationNumberLocationText>${item.blockItem[z].value[0]}</trsdo:EngineIdentificationNumberLocationText>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    str += getIdCharacter();
    str += getEngineIdCharacter();

    str += `</trcdo:VehicleLabelingDetails>`;
    if (str === `</trcdo:VehicleLabelingDetails>`) str = '';
    return str;
  };

  const getIdCharacter = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 3) {
          // описание маркировки
          if ('check' in item && item.check !== true) {
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name === 'С' && z === 0)
                str += `<trcdo:VehicleIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${item.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
              if (item.blockItem[z].name === 'По')
                str +=
                  item.blockItem[z + 2].value[0] !== ''
                    ? `<trsdo:IdCharacterQuantity>${
                        item.blockItem[z + 2].value[0].length
                      }</trsdo:IdCharacterQuantity>`
                    : `<trsdo:IdCharacterQuantity>${
                        parseInt(item.blockItem[z].value[0]) -
                        parseInt(item.blockItem[z - 1].value[0])
                      }</trsdo:IdCharacterQuantity>`;
              if (item.blockItem[z].name === 'Описание')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterText>${item.blockItem[z].value[0]}</trsdo:IdCharacterText>`;
              if (item.blockItem[z].name === 'Значение')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trcdo:IdCharacterValueDetails><trsdo:IdCharacterValueCode>${item.blockItem[z].value[0]}</trsdo:IdCharacterValueCode>`;
              if (item.blockItem[z].name === 'Расшифровка значения')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterValueText>${item.blockItem[z].value[0]}</trsdo:IdCharacterValueText></trcdo:IdCharacterValueDetails>`;
              if (item.blockItem[z].name === 'С' && z !== 0)
                str += `</trcdo:VehicleIdCharacterDetails><trcdo:VehicleIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${item.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
            }
            str += `</trcdo:VehicleIdCharacterDetails>`;
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getEngineIdCharacter = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 5) {
          //описание маркировки двигателя
          if ('check' in item && item.check !== true) {
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name === 'С' && z === 0)
                str += `<trcdo:EngineIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${item.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
              if (item.blockItem[z].name === 'По')
                str +=
                  item.blockItem[z + 2].value[0] !== ''
                    ? `<trsdo:IdCharacterQuantity>${
                        item.blockItem[z + 2].value[0].length
                      }</trsdo:IdCharacterQuantity>`
                    : `<trsdo:IdCharacterQuantity>${
                        parseInt(item.blockItem[z].value[0]) -
                        parseInt(item.blockItem[z - 1].value[0])
                      }</trsdo:IdCharacterQuantity>`;
              if (item.blockItem[z].name === 'Описание')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterText>${item.blockItem[z].value[0]}</trsdo:IdCharacterText>`;
              if (item.blockItem[z].name === 'Значение')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trcdo:IdCharacterValueDetails><trsdo:IdCharacterValueCode>${item.blockItem[z].value[0]}</trsdo:IdCharacterValueCode>`;
              if (item.blockItem[z].name === 'Расшифровка значения')
                str +=
                  item.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterValueText>${item.blockItem[z].value[0]}</trsdo:IdCharacterValueText></trcdo:IdCharacterValueDetails>`;
              if (item.blockItem[z].name === 'С' && z !== 0)
                str += `</trcdo:EngineIdCharacterDetails><trcdo:EngineIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${item.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
            }
            str += `</trcdo:EngineIdCharacterDetails>`;
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getTNVEDNumber = (): string => {
    let str = '';
    let check = false;
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 0 || item.id === 47) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Мнемоника' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].value[0].includes('RU')
            ) {
              check = true;
            }

            if (
              item.blockItem[z].name === 'Код ТН ВЭД' &&
              item.blockItem[z].value[0] !== '' &&
              check
            ) {
              str += `<trcdo:TNVEDNumber>${item.blockItem[z].value[0]}</trcdo:TNVEDNumber>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    return str;
  };

  const getBodywork = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 7) {
          str += '<trcdo:VehicleBodyworkDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Количество дверей' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleDoorQuantity>${item.blockItem[z].value[0]}</trsdo:VehicleDoorQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Исполнение загрузочного пространства' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleCarriageSpaceImplementationText>${item.blockItem[z].value[0]}</trsdo:VehicleCarriageSpaceImplementationText>`;
            }
            if (item.blockItem[z].name === 'Тип кузова' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${item.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              item.blockItem[z].name === 'Пассажировместимость' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehiclePassengerQuantity>${item.blockItem[z].value[0]}</trsdo:VehiclePassengerQuantity>`;
            }
          }
          str += '</trcdo:VehicleBodyworkDetails>';
        }
        return item;
      });
      return items;
    });

    if (str === '<trcdo:VehicleBodyworkDetails></trcdo:VehicleBodyworkDetails>') str = '';

    return str;
  };

  const getRunningGear = (check: boolean): string => {
    let str = '';
    let osi = 0;
    str += '<trcdo:VehicleRunningGearDetails>';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 6 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Количество колес' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleWheelQuantity>${item.blockItem[z].value[0]}</trsdo:VehicleWheelQuantity>`;
            } else if (
              item.blockItem[z].name === 'Количество колес' &&
              item.blockItem[z].value[0] === ''
            ) {
              str += `<trsdo:VehicleWheelQuantity>0</trsdo:VehicleWheelQuantity>`;
            }
            if (
              item.blockItem[z].name === 'Количество ведущих колес' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:PoweredWheelQuantity>${item.blockItem[z].value[0]}</trsdo:PoweredWheelQuantity>`;
            }
            if (item.blockItem[z].name === 'Количество осей') {
              osi = parseInt(item.blockItem[z].value[0]);
            }
          }
        }
        if (item.id === 7) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Рама' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:MachineFrameText>${item.blockItem[z].value[0]}</trsdo:MachineFrameText>`;
            }
          }

          for (let z = 0; z < osi; z++) {
            str += getAxes(`${z + 1}-ая ось`, check);
          }
        }
        if (item.id === 10 && 'check' in item && item.check === false) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'База' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleWheelbaseMeasure measurementUnitCode="MMT">${item.blockItem[z].value[0]}</trsdo:VehicleWheelbaseMeasure>`;
            }
          }
        }
        if (item.id === 9) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Дорожный просвет' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleGroundClearanceMeasure measurementUnitCode="MMT">${item.blockItem[z].value[0]}</trsdo:VehicleGroundClearanceMeasure>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    str += getTransmissions();
    str += getSuspension();
    str += getSteering();
    str += getTyre(check);
    str += '</trcdo:VehicleRunningGearDetails>';

    if (str === '<trcdo:VehicleRunningGearDetails></trcdo:VehicleRunningGearDetails>') str = '';
    return str;
  };

  const getVariantDetails = (check: boolean): string => {
    let str = '';
    str += '<trcdo:VehicleVariantDetails>';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 0) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Модификация' && item.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTypeVariantId>${item.blockItem[z].value[0]}</trsdo:VehicleTypeVariantId>`;
            }
          }
        }
        return item;
      });
      return items;
    });
    str += getBodywork();
    str += getRunningGear(check);
    str += getOverallDimension();
    str += getTrailer();
    str += getFuel();
    str += getFuelFeed();
    str += getIgnition();
    str += getExhaust();
    str += getPowerStorage();
    str += getVoltage();
    str += getMaxSpeed();
    str += getBrakingSystem();
    str += getEngineQuantity();
    str += getEngine();
    str += getEngineLocation();
    str += getMass();
    str += getElectricalEngine();
    str += getElectricalMachine();
    str += getECUModel();
    str += '</trcdo:VehicleVariantDetails>';
    return str;
  };

  const getOwner = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 44) {
          str += '<doc:OwnerDetails><doc:DocumentDetails>';
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Пробег' && item.blockItem[z].value[0] !== '') {
              str += `<doc:VehicleMileage measurementUnitCode="KMT">${item.blockItem[z].value[0]}</doc:VehicleMileage>`;
            }
            if (item.blockItem[z].name === 'Стоимость' && item.blockItem[z].value[0] !== '') {
              str += `<doc:VehicleCost currencyCodeListId="NSI_078" currencyCode="RUB">${item.blockItem[z].value[0]}</doc:VehicleCost>`;
            }
          }
          str +=
            '</doc:DocumentDetails><doc:SignersList><doc:SignerTypeCode>3</doc:SignerTypeCode>';
          if (
            item.blockItem[0].name === 'Тип собственника' &&
            item.blockItem[0].value[0] === 'Физическое лицо'
          ) {
            str += '<ccdo:OwnerIndividualDetails>';
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name.includes('СНИЛС') && item.blockItem[z].value[0] !== '') {
                str += `<ccdo:IndividualId kindId="15">${item.blockItem[z].value[0]}</ccdo:IndividualId>`;
              }
            }
            str += '</ccdo:OwnerIndividualDetails>';
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].name === 'Адрес электронной почты' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<doc:CommunicationDetails CommunicationChannelCode="EM">${item.blockItem[z].value[0]}</doc:CommunicationDetails>`;
              }
            }
          } else if (
            item.blockItem[0].name === 'Тип собственника' &&
            item.blockItem[0].value[0] === 'Юридическое лицо'
          ) {
            str += '<ccdo:OwnerOrganizationDetails>';
            for (let z = 0; z < item.blockItem.length; z++) {
              if (item.blockItem[z].name === 'Страна' && item.blockItem[z].value[0] !== '') {
                str += `<ccdo:EECCountryCode>${
                  country[item.blockItem[z].value[0]]
                }</ccdo:EECCountryCode>`;
              }
              if (
                item.blockItem[z].name === 'Полное наименование организации' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<csdo:OrganizationName>${item.blockItem[z].value[0]}</csdo:OrganizationName>`;
              }
              if (item.blockItem[z].name.includes('ОГРН') && item.blockItem[z].value[0] !== '') {
                str += `<ccdo:OrganizationId kindId="${
                  item.blockItem[z - 3].value[0].includes('Республика Беларусь')
                    ? '4'
                    : item.blockItem[z - 3].value[0].includes('Российская Федерация')
                    ? '1'
                    : ''
                }">${item.blockItem[z].value[0]}</ccdo:OrganizationId>`;
              }
            }
            str += '</ccdo:OwnerOrganizationDetails>';
            for (let z = 0; z < item.blockItem.length; z++) {
              if (
                item.blockItem[z].name === 'Адрес электронной почты' &&
                item.blockItem[z].value[0] !== ''
              ) {
                str += `<doc:CommunicationDetails CommunicationChannelCode="EM">${item.blockItem[z].value[0]}</doc:CommunicationDetails>`;
              }
            }
          }
          str += '</doc:SignersList></doc:OwnerDetails>';
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getCountry = (): string => {
    let str = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 41) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Страна происхождения' &&
              item.blockItem[z].value[0] !== ''
            ) {
              str += `<csdo:UnifiedCountryCode codeListId="NSI_034">${
                country[item.blockItem[z].value[0]]
              }</csdo:UnifiedCountryCode>`;
            }
          }
        }
        return item;
      });
      return items;
    });

    return str;
  };

  const getNoteText = (): string => {
    let str: string = '';
    let check: boolean = true;
    str += '<csdo:NoteText>';
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 0 || item.id === 47) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (
              item.blockItem[z].name === 'Мнемоника' &&
              item.blockItem[z].value[0] !== '' &&
              item.blockItem[z].value[0].includes('RU')
            ) {
              check = false;
            }
            if (
              item.blockItem[z].name === 'Код ТН ВЭД' &&
              item.blockItem[z].value[0] !== '' &&
              check
            ) {
              str += `ТНВЭД ${item.blockItem[z].value[0]}`;
            }
          }
        }
        if (item.id === 40) {
          if (item.blockItem[0].value[0] !== '') str += `. ${item.blockItem[0].value[0]}`;
        }
        return item;
      });
      return items;
    });

    str += '</csdo:NoteText>';
    if (str.includes('<csdo:NoteText></csdo:NoteText>')) str = '';
    return str;
  };

  const getDocumentDetails = (): string => {
    let str: string = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 43) {
          str += '<trcdo:DocumentDetails>';
          if (item.blockItem[0].value[0] !== '') {
            str += `<csdo:DocKindCode codeListId="NSI_012">${
              docsType[item.blockItem[0].value[0]]
            }</csdo:DocKindCode>`;
          }
          if (item.blockItem[1].value[0] !== '') {
            str += `<csdo:DocId>${item.blockItem[1].value[0]}</csdo:DocId>`;
          }
          str += '</trcdo:DocumentDetails>';
        }
      });
    });

    return str;
  };

  const getAddress = (id: number): { str1: string; b: boolean } => {
    let str: string = '';

    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === id) {
          str += '<trcdo:VehicleManufacturerDetails>';
          if (item.blockItem[0].value[0] !== '') {
            str += `<csdo:UnifiedCountryCode codeListId="NSI_034">${
              country[item.blockItem[0].value[0]]
            }</csdo:UnifiedCountryCode>`;
          }
          if (item.blockItem[1].value[0] !== '') {
            str += `<csdo:BusinessEntityName>${item.blockItem[1].value[0]}</csdo:BusinessEntityName>`;
          }
          if (item.blockItem[2].value[0] !== '') {
            str += `<csdo:BusinessEntityId kindId="${
              (item.blockItem[0].value[0].includes("Республика Беларусь"))
                ? '4'
                :(item.blockItem[0].value[0].includes("Российская Федерация"))
                ? '1'
                : ''
            }">${item.blockItem[2].value[0]}</csdo:BusinessEntityId>`;
          }
          let str2: string = '';
          str2 += '<ccdo:SubjectAddressDetails><csdo:AddressKindCode>4</csdo:AddressKindCode>';
          if (item.blockItem[3].value[0] !== '') {
            str2 += `<csdo:UnifiedCountryCode codeListId="NSI_034">${
              country[item.blockItem[3].value[0]]
            }</csdo:UnifiedCountryCode>`;
          }
          if (item.blockItem[4].value[0] !== '') {
            str2 += `<csdo:RegionName>${item.blockItem[4].value[0]}</csdo:RegionName>`;
          }
          if (item.blockItem[5].value[0] !== '') {
            str2 += `<csdo:DistrictName>${item.blockItem[5].value[0]}</csdo:DistrictName>`;
          }
          if (item.blockItem[6].value[0] !== '') {
            str2 += `<csdo:CityName>${item.blockItem[6].value[0]}</csdo:CityName>`;
          }
          if (item.blockItem[7].value[0] !== '') {
            str2 += `<csdo:SettlementName>${item.blockItem[7].value[0]}</csdo:SettlementName>`;
          }
          if (item.blockItem[8].value[0] !== '') {
            str2 += `<csdo:StreetName>${item.blockItem[8].value[0]}</csdo:StreetName>`;
          }
          if (item.blockItem[9].value[0] !== '') {
            str2 += `<csdo:BuildingNumberId>${item.blockItem[9].value[0]}</csdo:BuildingNumberId>`;
          }
          if (item.blockItem[10].value[0] !== '') {
            str2 += `<csdo:RoomNumberId>${item.blockItem[10].value[0]}</csdo:RoomNumberId>`;
          }
          if (item.blockItem[11].value[0] !== '') {
            str2 += `<csdo:PostCode>${item.blockItem[11].value[0]}</csdo:PostCode>`;
          }
          if (item.blockItem[12].value[0] !== '') {
            str2 += `<csdo:PostOfficeBoxId>${item.blockItem[12].value[0]}</csdo:PostOfficeBoxId>`;
          }
          str2 += '</ccdo:SubjectAddressDetails>';
          if (
            str2.includes(
              '<ccdo:SubjectAddressDetails><csdo:AddressKindCode>4</csdo:AddressKindCode></ccdo:SubjectAddressDetails>'
            )
          ) {
            str2 = '';
          }

          let str3: string = '';

          str3 += '<ccdo:SubjectAddressDetails><csdo:AddressKindCode>2</csdo:AddressKindCode>';
          if (item.blockItem[13].value[0] !== '') {
            str3 += `<csdo:UnifiedCountryCode codeListId="NSI_034">${
              country[item.blockItem[13].value[0]]
            }</csdo:UnifiedCountryCode>`;
          }
          if (item.blockItem[14].value[0] !== '') {
            str3 += `<csdo:RegionName>${item.blockItem[14].value[0]}</csdo:RegionName>`;
          }
          if (item.blockItem[15].value[0] !== '') {
            str3 += `<csdo:DistrictName>${item.blockItem[15].value[0]}</csdo:DistrictName>`;
          }
          if (item.blockItem[16].value[0] !== '') {
            str3 += `<csdo:CityName>${item.blockItem[16].value[0]}</csdo:CityName>`;
          }
          if (item.blockItem[17].value[0] !== '') {
            str3 += `<csdo:SettlementName>${item.blockItem[17].value[0]}</csdo:SettlementName>`;
          }
          if (item.blockItem[18].value[0] !== '') {
            str3 += `<csdo:StreetName>${item.blockItem[18].value[0]}</csdo:StreetName>`;
          }
          if (item.blockItem[19].value[0] !== '') {
            str3 += `<csdo:BuildingNumberId>${item.blockItem[19].value[0]}</csdo:BuildingNumberId>`;
          }
          if (item.blockItem[20].value[0] !== '') {
            str3 += `<csdo:RoomNumberId>${item.blockItem[20].value[0]}</csdo:RoomNumberId>`;
          }
          if (item.blockItem[21].value[0] !== '') {
            str3 += `<csdo:PostCode>${item.blockItem[21].value[0]}</csdo:PostCode>`;
          }
          if (item.blockItem[22].value[0] !== '') {
            str3 += `<csdo:PostOfficeBoxId>${item.blockItem[22].value[0]}</csdo:PostOfficeBoxId>`;
          }
          str3 += '</ccdo:SubjectAddressDetails>';
          if (
            str3.includes(
              '<ccdo:SubjectAddressDetails><csdo:AddressKindCode>2</csdo:AddressKindCode></ccdo:SubjectAddressDetails>'
            )
          ) {
            str3 = '';
          }

          str += str2;
          str += str3;

          if (item.blockItem[23].value[0] !== '') {
            str += `<ccdo:UnifiedCommunicationDetails>
            <csdo:UnifiedCommunicationChannelCode codeListId="NSI_042">EM</csdo:UnifiedCommunicationChannelCode>
            <csdo:CommunicationChannelName>электронная почта</csdo:CommunicationChannelName>
            <csdo:CommunicationChannelId>${item.blockItem[23].value[0]}</csdo:CommunicationChannelId>
                </ccdo:UnifiedCommunicationDetails>`;
          }
          if (item.blockItem[24].value[0] !== '') {
            str += `<ccdo:UnifiedCommunicationDetails>
            <csdo:UnifiedCommunicationChannelCode codeListId="NSI_042">TE</csdo:UnifiedCommunicationChannelCode>
            <csdo:CommunicationChannelName>телефон</csdo:CommunicationChannelName>
            <csdo:CommunicationChannelId>${item.blockItem[24].value[0]}</csdo:CommunicationChannelId>
                </ccdo:UnifiedCommunicationDetails>`;
          }
          if (item.blockItem[25].value[0] !== '') {
            str += `<ccdo:UnifiedCommunicationDetails>
            <csdo:UnifiedCommunicationChannelCode codeListId="NSI_042">MT</csdo:UnifiedCommunicationChannelCode>
            <csdo:CommunicationChannelName>мобильный телефон</csdo:CommunicationChannelName>
            <csdo:CommunicationChannelId>${item.blockItem[25].value[0]}</csdo:CommunicationChannelId>
                </ccdo:UnifiedCommunicationDetails> `;
          }
          if (item.blockItem[26].value[0] !== '') {
            str += `<ccdo:UnifiedCommunicationDetails>
            <csdo:UnifiedCommunicationChannelCode codeListId="NSI_042">FX</csdo:UnifiedCommunicationChannelCode>
            <csdo:CommunicationChannelName>телефакс</csdo:CommunicationChannelName>
            <csdo:CommunicationChannelId>${item.blockItem[26].value[0]}</csdo:CommunicationChannelId>
              </ccdo:UnifiedCommunicationDetails>`;
          }

          str += `<trsdo:VehicleManufacturerKindCode>${
            id === 61 ? '05' : id === 62 ? '15' : id === 63 ? '10' : ''
          }</trsdo:VehicleManufacturerKindCode></trcdo:VehicleManufacturerDetails>`;
          if (
            str.includes(
              `<trcdo:VehicleManufacturerDetails><trsdo:VehicleManufacturerKindCode>${
                id === 61 ? '05' : id === 62 ? '15' : id === 63 ? '10' : ''
              }</trsdo:VehicleManufacturerKindCode></trcdo:VehicleManufacturerDetails>`
            )
          ) {
            str = '';
          }
        }
      });
    });

     if (
       (str.includes('<trcdo:VehicleManufacturerDetails>') &&
        str.includes('</trcdo:VehicleManufacturerDetails>') &&
        str.includes('<ccdo:SubjectAddressDetails>') &&
        str.includes('</ccdo:SubjectAddressDetails>')) ||
      str.length === 0
    ) {
      return { str1: str, b: true };
    }
    return { str1: str, b: false };
  };

  const onclickSubmit = async () => {
    let date = new Date();
    date.setHours(date.getHours() + 3);
    let check = true;
    let a = document.createElement('a');
    let mnemonic = '';
    let maker = '';
    let ogrn = '';
    let passport = '';
	  let b1 = false;
    let b2 = false;
    let b3 = false;
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        item.blockItem.map((i) => {
          if (i.id === 158) {
            mnemonic = i.value[0];
          }
          if (i.id === 159) {
            maker = i.value[0];
          }
          if (i.name === 'ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН' && i.id === 198) {
            ogrn = i.value[0];
          }
          if (
            i.name ===
            'Уникальный номер оформляемого электронного паспорта в системах электронных паспортов'
          ) {
            passport = i.value[0];
          }
          if (i.name === 'Разные шины') {
            check = i.value[0] === 'true';
            check = !check;
          }
          if ('numeric' in i && i.numeric === true) {
            i.value[0] = i.value[0].replace(/,/, '.');
          }
          return i;
        });
        return item;
      });
      return items;
    });
    let data: string = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ccdo="urn://x-artefacts-epts-ru/EEC_M_ComplexDataObjects/0.4.17" xmlns:csdo="urn://x-artefacts-epts-ru/EEC_M_SimpleDataObjects/0.4.8" xmlns:doc="urn://x-artefacts-epts-ru/ELPTSAddData/1.0.11" xmlns:pas="http://passport.integration.pts.fors.ru/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:trcdo="urn://x-artefacts-epts-ru/EEC_M_TR_ComplexDataObjects/1.1.11" xmlns:trsdo="urn://x-artefacts-epts-ru/EEC_M_TR_SimpleDataObjects/1.0.14" xmlns:urn1="urn://x-artefacts-epts-ru/EPTS_Services/1.0.1">
    <soapenv:Header/>
        <soapenv:Body>
            <pas:ELPTSAddData>
                <MessageType>REQUEST</MessageType>
                <RequestMessage>
                    <urn1:MessageID>\${=java.util.UUID.randomUUID()}</urn1:MessageID>
                    <urn1:MessageMetadata>
                        <urn1:Sender>
                            <urn1:Mnemonic>${mnemonic}</urn1:Mnemonic>
                            <urn1:HumanReadableName>${maker}</urn1:HumanReadableName>
                        </urn1:Sender>
                        <urn1:SendingTimestamp>${date
                          .toISOString()
                          .replace('Z', '+03:00')}</urn1:SendingTimestamp>
                        <urn1:Recipient>
                            <urn1:Mnemonic>ELPTS</urn1:Mnemonic>
                            <urn1:HumanReadableName>ИС СИСТЕМЫ ЭЛЕКТРОННЫХ ПАСПОРТОВ</urn1:HumanReadableName>
                        </urn1:Recipient>
                    </urn1:MessageMetadata>
                    <urn1:SenderProvidedRequestData>
                        <urn1:ApplicationInfoContainers>
                            <urn1:ApplicationInfoContainer>
                                <urn1:ApplicationID>150</urn1:ApplicationID>
                                <urn1:ApplicationName>Создание электронного паспорта изготовителями и уполномоченными органами</urn1:ApplicationName>
                            </urn1:ApplicationInfoContainer>
                        </urn1:ApplicationInfoContainers>
                        <urn1:MessagePrimaryContent id="contentWithPersonalSignature">
                            <doc:VehicleEPassportDetails> 
                            <trsdo:VehicleEPassportKindCode>3</trsdo:VehicleEPassportKindCode>
                            ${
                              passport !== ''
                                ? `<trsdo:VehicleEPassportId>${passport}</trsdo:VehicleEPassportId>`
                                : ''
                            }
							<trsdo:VehicleEPassportBaseCode>02</trsdo:VehicleEPassportBaseCode>`;

    data += getVehicleDetails();
    data += getDocumentDetails();
    data += getTNVEDNumber();
    data += getVehicleTypeDetails();
    data += getVariantDetails(check);

let res1 = getAddress(61);
    data += res1.str1;
    b1 = res1.b;
    let res2 = getAddress(62);
    data += res2.str1;
    b2 = res2.b;
    let res3 = getAddress(63);
    data += res3.str1;
    b3 = res3.b;

	  
    // data += getAddress(61);
    // data += getAddress(62);
    // data += getAddress(63);

    data += getOwner();
    data += getNoteText();
    data += getCountry();

    data += `<csdo:BusinessEntityName>${maker}</csdo:BusinessEntityName>
        <csdo:BusinessEntityId kindId="${
          /^BY.{0,}$/.test(mnemonic) ? '4' : /^RU.{0,}$/.test(mnemonic) ? '1' : ''
        }">${ogrn}</csdo:BusinessEntityId>
        </doc:VehicleEPassportDetails>
        </urn1:MessagePrimaryContent>
        <urn1:PersonalSignature/>
        <!--первая подпись (должностное лицо)-->
    </urn1:SenderProvidedRequestData>
    <urn1:SenderInformationSystemSignature/>
    <!--вторая подпись (системная)-->
</RequestMessage>
</pas:ELPTSAddData>
</soapenv:Body>
</soapenv:Envelope>`;
if(data.includes("<trsdo:VehicleTyreKindIndex>false/-</trsdo:VehicleTyreKindIndex>")){
  data = data.replaceAll("<trsdo:VehicleTyreKindIndex>false/-</trsdo:VehicleTyreKindIndex>", "")
}
if(data.includes("<trsdo:VehicleTyreKindSpeed></trsdo:VehicleTyreKindSpeed>")){
  data = data.replaceAll("<trsdo:VehicleTyreKindSpeed></trsdo:VehicleTyreKindSpeed>", "")
}
if(data.includes("<trsdo:VehicleTyreKindIndex></trsdo:VehicleTyreKindIndex>")){
  data = data.replaceAll("<trsdo:VehicleTyreKindIndex></trsdo:VehicleTyreKindIndex>", "")
}
	  if (b1 && b2 && b3) {
    let blob = new Blob([data], { type: 'application/octet-stream' });
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'text.xml';
    document.body.appendChild(a);
    a.click();
    window.setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 2000);
	  }
	  else {
      if (!b1) {
        alert('Заполните адрес изготовителя');
      }
      if (!b2) {
        alert('Заполните адрес сборочного завода');
      }
      if (!b3) {
        alert('Заполните адрес представителя изготовителя');
      }
    }
    const json: IDict = {};
    blocks.map((items) => {
      items.blocksItem.map((item) => {
        if (item.id === 47) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Мнемоника') {
              json.mnemonic = item.blockItem[z].value[0];
            }
            if (item.blockItem[z].name === 'ОГРН/ОКЮЛП(УНП)/ОКПО/Номер ГРЮЛ/БИН') {
              json.OGRN = item.blockItem[z].value[0];
            }
            if (item.blockItem[z].name === 'Полное название организации оформителя') {
              json.name = item.blockItem[z].value[0];
            }
          }
        }
        if (item.id === 0) {
          for (let z = 0; z < item.blockItem.length; z++) {
            if (item.blockItem[z].name === 'Марка') {
              json.makeName = item.blockItem[z].value[0];
            }
            if (item.blockItem[z].name === 'Тип') {
              json.type = item.blockItem[z].value[0];
            }
            if (item.blockItem[z].name === 'Модификация') {
              json.variant = item.blockItem[z].value[0];
            }
            if (item.blockItem[z].name === 'Код ТН ВЭД') {
              json.TNVED = item.blockItem[z].value[0];
            }
            if (
              item.blockItem[z].name ===
              'Категория в соответствии с ТР ТС 031/2012 или ТР ТС 010/2011 или ТР ТС 018/2011 '
            ) {
              json.category = item.blockItem[z].value[0];
            }
          }
        }
        return item;
      });
      return items;
    });
    json.date = date.toISOString();
json.basis = "Основание 2, с собственником";
    if (b1 && b2 && b3) post2(json);
	  return b1 && b2 && b3;
  };

  const post2 = (object: Object) => {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };

    req.open('POST', 'https://api.jsonbin.io/v3/b', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader(
      'X-Master-Key',
      '$2b$10$BNw4iZJW1.G.RaxeLdqU/.W/zjWWBG2R.rMLD0TOEEowAKs9QL16m'
    );
	   req.setRequestHeader("X-Collection-Id", "63d90d88c0e7653a056a32ae");
    req.send(JSON.stringify(object));
    alert('ok');
  };

  const insert = function insert(main_string: string, ins_string: string, pos: number): string {
    if (typeof pos == 'undefined') {
      pos = 0;
    }
    if (typeof ins_string == 'undefined') {
      ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
  };
  return (
    <ErrorBoundary>
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onClickAddDopBlock,
          uploadImage,
          deleteFile,
          onClickHiddenButton
        }}
      >
        <Box display='flex' marginTop={5} height='100%' justifyContent='center' alignItems='center'>
          <Blocks
            blocks={blocks}
            onChangeBlock={onChangeBlock}
            onclickSubmit={onclickSubmit}
          ></Blocks>
        </Box>
      </Context.Provider>
    </ErrorBoundary>
  );
};

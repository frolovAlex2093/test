import { Box } from '@mui/material';
import React from 'react';
import { Blocks } from '../components';
import { blocks2 } from '../fields/fields2';
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
  typePropulsion
} from '../guides';
import { Context } from './Third';

export const Fourth: React.FC = () => {
  const [blockss, setBlockss] = React.useState(blocks2);

  const alertValidation = (pattern: string, value: string): boolean => {
    if (pattern === '^[0-9]{4}$' && /^[0-9]{4}$/.test(value) === false) return true;
    if (pattern === '^.{0,50}$' && /^.{0,50}$/.test(value) === false) return true;
    if (pattern === '^.{0,120}$' && /^.{0,120}$/.test(value) === false) return true;
    if (pattern === '^.{0,200}$' && /^.{0,200}$/.test(value) === false) return true;
    if (pattern === '^.{0,500}$' && /^.{0,500}$/.test(value) === false) return true;
    if (pattern === '^.{0,1000}$' && /^.{0,1000}$/.test(value) === false) return true;
    if (pattern === '^[0-9]{0,4}$' && /^[0-9]{0,4}$/.test(value) === false) return true;
    if (pattern === '^[0-9]{0,20}$' && /^[0-9]{0,20}$/.test(value) === false) return true;
    if (pattern === '^.{0,20}$' && /^.{0,20}$/.test(value) === false) return true;
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

  const onCkickAddDopBlock = (id: number, groupBlock: number[] | undefined) => {
    if (groupBlock !== undefined) {
      let max = 0;
      let indexStart = null;
      blockss.map((item) =>
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id > max) max = ii.id;
            return ii;
          });
          return i;
        })
      );

      let maxCount = 0;
      let newGroup: number[] = [];
      let newGroupp: number[] = [];

      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            indexStart = i.blockItem.map((el) => el.id).indexOf(groupBlock[0]);
            if (indexStart >= 0) {
              for (let z = 0; z < groupBlock.length; z++) {
                i.blockItem.splice(i.blockItem.length - z + groupBlock.length, 0, {
                  ...i.blockItem[z + indexStart],
                  id: max + 1,
                  value: ['']
                });

                newGroup.push(max + 1);
                max++;
              }
              i.blockItem.map((ii) => {
                if ('count' in ii && ii.count !== undefined) {
                  if (ii.count > maxCount) maxCount = ii.count;
                }
                return ii;
              });
            }
            i.blockItem.map((ii) => {
              if (ii.id === max) {
                if ('count' in ii && ii.count !== undefined) {
                  ii.count = maxCount++;
                }
                if ('countBlock' in ii && ii.countBlock !== undefined) {
                  ii.countBlock++;
                }
                if ('buttons' in ii && ii.buttons !== undefined) {
                  ii.buttons = [true, true];
                }
                ii.checkbox = false;
                if ('groupBlock' in ii) {
                  for (let z = groupBlock.length - 1; z >= 0; z--) {
                    if (ii.groupBlock !== undefined) {
                      ii.groupBlock = newGroup;
                    }
                  }
                }
                if ('group' in ii && ii.group !== undefined) {
                  for (let z = ii.group.length - 1; z >= 0; z--) {
                    newGroupp[z] = max - z;
                  }
                  ii.group = newGroupp.reverse();
                }
              }

              return ii;
            });
            return { ...i };
          });
          return { ...item };
        })
      );
    }
  };

  const handleChange = (id: number, checked: boolean) => {
    let check: boolean;
    let check2: boolean;
    let check3: boolean;

    setBlockss(
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id === id) {
              if (ii.type === 'checkbox') {
                if (ii.value.includes('false') === true) {
                  ii.value[0] = 'true';
                } else {
                  ii.value[0] = 'false';
                }
              } else if ('disabled' in ii) ii.disabled = !ii.disabled;
            }
            if (ii.name === 'Разные шины') {
              check = ii.value[0] === 'true';
            }
            if (ii.name === 'Бесступенчатая коробка передач') {
              check3 = ii.value[0] === 'true';
            }
            if (ii.name === 'Буксировка прицепа') {
              check2 = ii.value[0] === 'true';
            }
            if (
              ii.name ===
              'Технически допустимая статическая вертикальная нагрузка в точке сцепки тягово-сцепного устройства'
            ) {
              ii.disabled = !check2;
            }
            if (ii.name === 'Техническая допустимая буксируемая масса') {
              ii.disabled = !check2;
            }
            if (ii.name === 'Масса прицепа с тормозной системой') {
              ii.disabled = !check2;
            }
            if (ii.name === 'Масса прицепа без тормозной системы') {
              ii.disabled = !check2;
            }
            return ii;
          });
          if (i.id === 27) {
            i.blockItem.map((ii) => {
              if (ii.name === 'Расположение') {
                ii.disabled = check;
              }
              for (let z = 0; z < i.blockItem.length; z++) {
                if (i.blockItem[z].name === 'Двускатная шина' && i.blockItem[z].id === 96) {
                  i.blockItem[z + 3].disabled = !(i.blockItem[z].value[0] === 'true');
                  i.blockItem[z + 4].disabled = i.blockItem[z + 3].disabled;
                } else if (i.blockItem[z].name === 'Двускатная шина') {
                  i.blockItem[z + 3].disabled = i.blockItem[z].value[0] === 'true';
                  i.blockItem[z + 4].disabled = i.blockItem[z + 3].disabled;
                }
              }
              return ii;
            });
          }
          if (i.id === 30) {
            i.blockItem.map((ii) => {
              if (ii.name === 'Передаточное число') {
                ii.disabled = check3;
              }
              if (ii.name === 'Максимально') {
                ii.disabled = !check3;
              }
              if (ii.name === 'Минимально') {
                ii.disabled = !check3;
              }
              return ii;
            });
          }
          return { ...i };
        });
        return { ...item };
      })
    );
  };

  const handleChangeValue = async (id: number, value: string | string[] | null) => {
    let check = true;
    let options: string[] = [];
    let os = 0;
    let checkOs: boolean;
    let ownerStr: string = '';
    setBlockss(
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id === id) {
              if (Array.isArray(value)) {
                ii.value = value;
              } else if (value === null) {
                ii.value[0] = '';
              } else {
                ii.value[0] = value;
              }
              if ('pattern' in ii && ii.pattern !== undefined && 'error' in ii) {
                ii.error = alertValidation(ii.pattern, ii.value[0]);
              }
            }
            if (ii.id === 166) {
              os = parseInt(ii.value[0]);
              for (let z = 0; z < os; z++) {
                options.push(`${z + 1}-ая ось`);
              }
            }
            if (ii.id === 13 && ii.value[0] === 'колесный движитель') {
              check = false;
            }
            if (ii.id === 13 && ii.value[0] !== 'колесный движитель') check = true;
            if (ii.name === 'Разные шины') {
              checkOs = ii.value[0] === 'true';
              ii.disabled = check;
            }
            if (ii.name === 'Расположение' && 'options' in ii && ii.options !== undefined) {
              ii.options = options;
            }
            if (ii.name === 'Порядковый номер оси' && 'options' in ii && ii.options !== undefined) {
              ii.options = options;
            }
            if (ii.name === 'Тип владельца') {
              if (ii.value[0] === 'Юридическое лицо') {
                ownerStr = 'Идентификатор (ОГРН)';
              } else if (ii.value[0] === 'Физическое лицо') {
                ownerStr = 'Идентификатор (СНИЛС)';
              } else if (ii.value[0] === '') {
                ownerStr = 'Идентификатор (ОГРН для ЮЛ/СНИЛС для ФЛ)';
              }
            }

            return ii;
          });
          if (i.id === 44) {
            i.blockItem[1].name = ownerStr;
          }
          return i;
        });
        return item;
      })
    );
  };

  const handleRadio = (id: number, value: string) => {
    setBlockss(
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id === id) {
              ii.name = value;
            }
            return ii;
          });
          return { ...i };
        });
        return { ...item };
      })
    );
  };

  const handleMultiple = (id: number) => {
    setBlockss(
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id === id) if ('multiple' in ii) ii.multiple = !ii.multiple;
            return ii;
          });
          return { ...i };
        });
        return { ...item };
      })
    );
  };

  const onClickAdd = (id: number, group: number[] | undefined) => {
    if (group !== undefined) {
      let max = 0;
      blockss.map((item) =>
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id > max) max = ii.id;
            return ii;
          });
          return i;
        })
      );

      let maxCount: number = 0;
      let indexStart = null;
      let indexEnd = null;
      let newGroup: number[] = [];
      let newGroupp: number[] = [];
      let counter = 0;
      let counterBlock = 0;

      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            indexStart = i.blockItem.map((el) => el.id).indexOf(group[0]);
            indexEnd = i.blockItem.map((el) => el.id).indexOf(group[group.length - 1]);
            if (indexStart >= 0) {
              i.blockItem.map((ii) => {
                if ('count' in ii && ii.count !== undefined) {
                  if (ii.count > maxCount) maxCount = ii.count;
                }
                return ii;
              });
              for (let z = 0; z < group.length; z++) {
                if (i.blockItem[z].name === 'Двускатная шина') {
                  i.blockItem.splice(indexStart + z + group.length, 0, {
                    ...i.blockItem[z + indexStart],
                    id: max + 1,
                    value: ['false']
                  });
                } else {
                  i.blockItem.splice(indexStart + z + group.length, 0, {
                    ...i.blockItem[z + indexStart],
                    id: max + 1,
                    value: ['']
                  });
                }

                newGroup.push(max + 1);
                max++;
              }
              i.blockItem.map((ii) => {
                if ('count' in ii && ii.count !== undefined) {
                  if (
                    'countBlock' in ii &&
                    ii.countBlock !== undefined &&
                    counterBlock === ii.countBlock
                  ) {
                    ii.count = counter;
                    counter++;
                  } else {
                    counterBlock++;
                    counter = 0;
                    ii.count = 0;
                    counter++;
                  }
                }
                return ii;
              });
              if (i.id === 27) {
                for (let z = 0; z < i.blockItem.length; z++) {
                  if (i.blockItem[z].name === 'Двускатная шина' && i.blockItem[z].id === 96) {
                    i.blockItem[z + 3].disabled = !(i.blockItem[z].value[0] === 'true');
                    i.blockItem[z + 4].disabled = i.blockItem[z + 3].disabled;
                  } else if (
                    i.blockItem[z].name === 'Двускатная шина' &&
                    i.blockItem[z].value[0] === 'false'
                  ) {
                    i.blockItem[z + 3].disabled = false;
                    i.blockItem[z + 4].disabled = i.blockItem[z + 3].disabled;
                  } else if (
                    i.blockItem[z].name === 'Двускатная шина' &&
                    i.blockItem[z].value[0] === 'true'
                  ) {
                    i.blockItem[z + 3].disabled = true;
                    i.blockItem[z + 4].disabled = i.blockItem[z + 3].disabled;
                  }
                }
              }
            }
            i.blockItem.map((ii) => {
              if (ii.id === id) {
                if ('buttons' in ii && ii.buttons !== undefined) {
                  ii.buttons = [false, false];
                }
              }
              if (ii.id === max) {
                if ('count' in ii && ii.count !== undefined) {
                  ii.count = maxCount + 1;
                }
                if ('buttonAdd' in ii) {
                  ii.buttonAdd = true;
                }
                if ('buttonDelete' in ii) {
                  ii.buttonDelete = true;
                }
                ii.checkbox = false;
                if ('group' in ii && ii.group !== undefined) {
                  for (let z = group.length - 1; z >= 0; z--) {
                    newGroupp[z] = max - z;
                  }
                  ii.group = newGroupp.reverse();
                }
                if ('groupBlock' in ii && ii.group !== undefined && ii.groupBlock !== undefined) {
                  for (let z = 0; z < newGroupp.length; z++) {
                    ii.groupBlock.push(newGroupp[z]);
                  }
                }
              }
              return ii;
            });
            return { ...i };
          });
          return { ...item };
        })
      );
    } else {
      let max = 0;
      blockss.map((item) =>
        item.blocksItem.map((i) => {
          i.blockItem.map((ii) => {
            if (ii.id > max) max = ii.id;
            return ii;
          });
          return i;
        })
      );
      let index = null;
      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            index = i.blockItem.map((el) => el.id).indexOf(id);
            if (index >= 0) {
              i.blockItem.splice(index + 1, 0, { ...i.blockItem[index], id: max + 1, value: [''] });
            }
            i.blockItem.map((ii) => {
              if (ii.id === max + 1) {
                if ('buttonAdd' in ii) {
                  ii.buttonAdd = true;
                }
                if ('buttonDelete' in ii) {
                  ii.buttonDelete = true;
                }
                ii.checkbox = false;
              }
              return ii;
            });
            return { ...i };
          });
          return { ...item };
        })
      );
    }
  };

  const onClickDelete = (id: number, group: number[] | undefined) => {
    let index = null;
    let indexII = 0;
    let but: boolean[];
    let idd: number;
    let counter = 0;
    let counterBlock = 0;

    if (group !== undefined) {
      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            index = i.blockItem.map((el) => el.id).indexOf(group[0]);
            if (index > 0) {
              i.blockItem.map((ii) => {
                if ('count' in ii && ii.count !== undefined) {
                  if (
                    'countBlock' in ii &&
                    ii.countBlock !== undefined &&
                    counterBlock === ii.countBlock
                  ) {
                    ii.count = counter;
                    counter++;
                  } else {
                    counterBlock++;
                    counter = 0;
                    ii.count = 0;
                    counter++;
                  }
                }
                return ii;
              });
            }
            return i;
          });
          return item;
        })
      );

      let max = 0;
      blockss.map((item) =>
        item.blocksItem.map((i) => {
          index = i.blockItem.map((el) => el.id).indexOf(group[0]);
          if (index > 0) {
            for (let z = 0; z > i.blockItem.length; z++) {
              if (i.blockItem[z].id === id) {
                idd = i.blockItem[z - group.length].id;
              }
            }

            i.blockItem.map((ii) => {
              if (id === ii.id) {
                if ('buttons' in ii && ii.buttons !== undefined) {
                  but = ii.buttons;
                }
              }
              if (
                'count' in ii &&
                ii.count !== undefined &&
                'countBlock' in ii &&
                ii.countBlock !== undefined &&
                'buttons' in ii &&
                ii.buttons !== undefined
              ) {
                counter = ii.count;
                counterBlock = ii.countBlock;
                but = ii.buttons;
              }

              if ('count' in ii && ii.count !== undefined) {
                if (ii.count > max) {
                  max = ii.count;
                }
              }
              return ii;
            });
          }
          return i;
        })
      );

      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            index = i.blockItem.map((el) => el.id).indexOf(group[0]);
            if (index > 0) {
              indexII = i.blockItem[i.blockItem.length - group.length].id;
              i.blockItem.splice(index, group.length);

              i.blockItem.map((ii) => {
                if (
                  'count' in ii &&
                  ii.count !== undefined &&
                  'countBlock' in ii &&
                  ii.countBlock !== undefined &&
                  'buttons' in ii &&
                  ii.buttons !== undefined &&
                  but !== undefined
                ) {
                  if (but[0] !== false) {
                    if (counter - 1 === ii.count && counterBlock === ii.countBlock) {
                      ii.buttons = but;
                    }
                  }
                }
                return ii;
              });
            }
            i.blockItem.map((ii) => {
              if (ii.id === idd) {
                if ('buttons' in ii && ii.buttons !== undefined) {
                  ii.buttons = but;
                }
              }

              return ii;
            });
            return { ...i };
          });
          return { ...item };
        })
      );
    } else {
      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            index = i.blockItem.map((el) => el.id).indexOf(id);
            if (index > 0) {
              i.blockItem.splice(index, 1);
            }
            i.blockItem.map((ii) => {
              return ii;
            });
            return { ...i };
          });
          return { ...item };
        })
      );
    }
  };

  const onChangeBlock = (id: number) => {
    setBlockss(
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          if (i.id === id) {
            if ('check' in i) {
              i.check = !i.check;
            }
            i.blockItem.map((ii) => {
              ii.value = [''];
              return ii;
            });
          }
          return i;
        });
        return item;
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

  const alerts = (files: any, event: any) => {
    if (files.length < 4 || files.length > 6) {
      alert('Приложите от 4 до 6 файлов');
      event.preventDefault();
      return false;
    } else {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 512 * 1024 * 8) {
          alert(`Файл ${files[i].name} больше 512кб`);
          event.preventDefault();
          return false;
        } else {
          return true;
        }
      }
    }
  };

  const uploadImage = async (event: any, id: number) => {
    const files = event.target.files;
    alerts(files, event);
    if (alerts(files, event)) {
      let base64: any = [];
      let str: string[] = [];
      let filess: any = [];
      for (let i = 0; i < files.length; i++) {
        base64[i] = await convertBase64(event.target.files[i]);
        if (typeof base64[i] === 'string') {
          str[i] = base64[i] as string;
          filess[i] = files[i].name;
        }
        str[i] = str[i].split(',')[1];
      }
      setBlockss(
        blockss.map((item) => {
          item.blocksItem.map((i) => {
            i.blockItem.map((ii) => {
              if (ii.id === id) {
                ii.value = str;
                if ('files' in ii) {
                  ii.files = filess;
                }
              }
              return ii;
            });
            return i;
          });
          return item;
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
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 55) {
          str += `<trcdo:VehicleAxleDetails>`;
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].value[0].includes('ось') && i.blockItem[z].value[0] === num) {
              if (i.blockItem[z + 2].value.includes('Колеса со сдвоенными шинами')) {
                str2 += `<trsdo:DualTireAxleIndicator>true</trsdo:DualTireAxleIndicator>`;
              } else {
                str2 += `<trsdo:DualTireAxleIndicator>false</trsdo:DualTireAxleIndicator>`;
              }
              if (i.blockItem[z + 2].value.includes('Управляемая ось')) {
                str2 += `<trsdo:SteeringAxleIndicator>true</trsdo:SteeringAxleIndicator>`;
              } else {
                str2 += `<trsdo:SteeringAxleIndicator>false</trsdo:SteeringAxleIndicator>`;
              }
              if (i.blockItem[z + 2].value.includes('Ведущая ось')) {
                str2 += `<trsdo:DrivingAxleIndicator>true</trsdo:DrivingAxleIndicator>`;
              } else {
                str2 += `<trsdo:DrivingAxleIndicator>false</trsdo:DrivingAxleIndicator>`;
              }
              if (i.blockItem[z + 2].value.includes('Тормозная ось')) {
                str2 += `<trsdo:BrakingAxleIndicator>true</trsdo:BrakingAxleIndicator>`;
              } else {
                str2 += `<trsdo:BrakingAxleIndicator>false</trsdo:BrakingAxleIndicator>`;
              }

              str += `
                            <trsdo:VehicleAxleOrdinal>${i.blockItem[z].value[0].split('-')[0]
                }</trsdo:VehicleAxleOrdinal>
                                ${i.blockItem[z + 1].value[0] === ''
                  ? ''
                  : `<trsdo:VehicleTechnicallyPermissibleMaxWeightOnAxleMeasure measurementUnitCode="KGM">${i.blockItem[z + 1].value[0]
                  }</trsdo:VehicleTechnicallyPermissibleMaxWeightOnAxleMeasure>`
                }
                            ${str2}
                            ${i.blockItem[z + 3].value[0] === ''
                  ? ''
                  : `<trsdo:VehicleAxleSweptPathMeasure measurementUnitCode="MMT">${i.blockItem[z + 3].value[0]
                  }</trsdo:VehicleAxleSweptPathMeasure>`
                }
                           `;
            }
          }
        }
        str2 = '';
        if (i.id === 27) {
          if (check) {
            for (let z = 0; z < i.blockItem.length; z++) {
              if (i.blockItem[z].value[0].includes('ось') && i.blockItem[z].value[0] === num) {
                if (
                  i.blockItem[z + 3].value[0] !== '' &&
                  i.blockItem[z + 4].value[0] !== '' &&
                  i.blockItem[z + 5].value[0] !== '' &&
                  i.blockItem[z + 6].value[0] !== ''
                ) {
                  str2 = `${i.blockItem[z + 3].value[0]}-${i.blockItem[z + 4].value[0]}/${i.blockItem[z + 5].value[0]
                    }-${i.blockItem[z + 6].value[0]}`;
                } else if (
                  i.blockItem[z + 3].value[0] !== '' &&
                  i.blockItem[z + 4].value[0] === '' &&
                  i.blockItem[z + 5].value[0] !== '' &&
                  i.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${i.blockItem[z + 3].value[0]}/${i.blockItem[z + 5].value[0]}`;
                } else if (
                  i.blockItem[z + 3].value[0] !== '' &&
                  i.blockItem[z + 4].value[0] !== '' &&
                  i.blockItem[z + 5].value[0] === '' &&
                  i.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${i.blockItem[z + 3].value[0]}-${i.blockItem[z + 4].value[0]}/-`;
                } else if (
                  i.blockItem[z + 3].value[0] !== '' &&
                  i.blockItem[z + 4].value[0] === '' &&
                  i.blockItem[z + 5].value[0] === '' &&
                  i.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `${i.blockItem[z + 3].value[0]}/-`;
                } else if (
                  i.blockItem[z + 3].value[0] === '' &&
                  i.blockItem[z + 4].value[0] === '' &&
                  i.blockItem[z + 5].value[0] !== '' &&
                  i.blockItem[z + 6].value[0] === ''
                ) {
                  str2 = `-/${i.blockItem[z + 5].value[0]}`;
                }

                str += `<trcdo:VehicleTyre>
                            <trsdo:VehicleTyreKindSize>${i.blockItem[z + 1].value[0]
                  }</trsdo:VehicleTyreKindSize>
                            <trsdo:VehicleTyreKindIndex>${str2}</trsdo:VehicleTyreKindIndex>
                            <trsdo:VehicleTyreKindSpeed>${i.blockItem[z + 7].value[0]
                  }</trsdo:VehicleTyreKindSpeed>
                            </trcdo:VehicleTyre>`;
              }
            }
          }
          str += `</trcdo:VehicleAxleDetails>`;
        }
        return i;
      });
      return item;
    });
    return str;
  };

  const getTransmissions = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        //трансмиссия
        if (i.id === 29 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTransmissionText>${i.blockItem[z].value[0]}</trsdo:VehicleTransmissionText>`;
            }
            if (i.blockItem[z].name === 'Схема трансмиссии' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:MachineTransmissionText>${i.blockItem[z].value[0]}</trsdo:MachineTransmissionText>`;
            }
          }
        }
        //Коробка передач
        if (i.id === 30 && 'check' in i && i.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>05</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Маркировка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${i.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Число передач вперед' && i.blockItem[z].value[0] !== '') {
              if (
                !isNaN(parseInt(i.blockItem[z].value[0])) &&
                !isNaN(parseInt(i.blockItem[z + 1].value[0]))
              )
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(i.blockItem[z].value[0]) + parseInt(i.blockItem[z + 1].value[0])
                  }</trsdo:TransmissionUnitGearQuantity>`;
              else if (!isNaN(parseInt(i.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  i.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
              else if (!isNaN(parseInt(i.blockItem[z + 1].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  i.blockItem[z + 1].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (i.blockItem[z].name === 'Наименование передачи' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (
              i.blockItem[z].name === 'Вид передаточного числа' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:TransmissionUnitGearType>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }
            if (i.blockItem[z].name === 'Передаточное число' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:TransmissionUnitGearRate>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
            }
            if (i.blockItem[z].name === 'Минимально' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:TransmissionUnitGearRate>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
            }
            if (i.blockItem[z].name === 'Максимально') {
              if (i.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRateMax>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRateMax>`;
              }
              if (i.blockItem[z - 4].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>05</trsdo:VehicleUnitKindCode><trcdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trcdo:VehicleComponentMakeName>`;
            } else if (
              i.blockItem[z].name === 'Марка' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Раздаточная коробка
        if (i.id === 31 && 'check' in i && i.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>10</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Маркировка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${i.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Число передач' && i.blockItem[z].value[0] !== '') {
              if (!isNaN(parseInt(i.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  i.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (i.blockItem[z].name === 'Наименование передачи' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (i.blockItem[z].name === 'Наименование передачи' && i.blockItem[z].value[0] === '') {
              str += `<trcdo:TransmissionUnitGearDetails>`;
            }
            if (
              i.blockItem[z].name === 'Вид передаточного числа' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:TransmissionUnitGearType>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }

            if (i.blockItem[z].name === 'Передаточное число') {
              if (i.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRate>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (i.blockItem[z - 2].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trsdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              i.blockItem[z].name === 'Марка' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Главная передача
        if (i.id === 32 && 'check' in i && i.check === false) {
          str +=
            '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>15</trsdo:VehicleUnitKindCode>';

          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Распределение по осям' &&
              i.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:AxisDistribution>${i.blockItem[z].value[0]}</trsdo:AxisDistribution>`;
            }
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Маркировка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentModelCode>${i.blockItem[z].value[0]}</trsdo:VehicleComponentModelCode>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Число передач' && i.blockItem[z].value[0] !== '') {
              if (!isNaN(parseInt(i.blockItem[z].value[0])))
                str += `<trsdo:TransmissionUnitGearQuantity>${parseInt(
                  i.blockItem[z].value[0]
                )}</trsdo:TransmissionUnitGearQuantity>`;
            }
            if (i.blockItem[z].name === 'Наименование передачи' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:TransmissionUnitGearDetails><trsdo:TransmissionUnitGearName>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearName>`;
            }
            if (i.blockItem[z].name === 'Наименование передачи' && i.blockItem[z].value[0] === '') {
              str += `<trcdo:TransmissionUnitGearDetails>`;
            }
            if (
              i.blockItem[z].name === 'Вид передаточного числа' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:TransmissionUnitGearType>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearType>`;
            }

            if (i.blockItem[z].name === 'Передаточное число') {
              if (i.blockItem[z].value[0] !== '') {
                str += `<trsdo:TransmissionUnitGearRate>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (i.blockItem[z - 2].value[0].includes('З.Х.')) {
                str += `<trsdo:TransmissionUnitReverseGearIndicator>true</trsdo:TransmissionUnitReverseGearIndicator>`;
              } else
                str += `<trsdo:TransmissionUnitReverseGearIndicator>false</trsdo:TransmissionUnitReverseGearIndicator>`;

              str += `</trcdo:TransmissionUnitGearDetails>`;
            }

            if (
              i.blockItem[z].name === 'Распределение по осям' &&
              i.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>15</trsdo:VehicleUnitKindCode><trcdo:AxisDistribution>${i.blockItem[z].value[0]}</trcdo:AxisDistribution>`;
            } else if (
              i.blockItem[z].name === 'Распределение по осям' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails>`;
            }
          }
          str += '</trcdo:TransmissionUnitDetails>';
        }
        //Вал отбора мощности
        if (i.id === 33 && 'check' in i && i.check === false) {
          if (
            i.blockItem[0].value[0] !== '' ||
            i.blockItem[1].value[0] !== '' ||
            i.blockItem[2].value[0] !== '' ||
            i.blockItem[3].value[0] !== ''
          ) {
            str +=
              '<trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>20</trsdo:VehicleUnitKindCode><trcdo:VehiclePowerTakeOffDetails>';
            for (let z = 0; z < i.blockItem.length; z++) {
              if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '' && z === 0) {
                str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
              }
              if (i.blockItem[z].name === 'Расположение' && i.blockItem[z].value[0] !== '') {
                str += `<trsdo:VehicleComponentLocationText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
              }
              if (i.blockItem[z].name === 'Частота вращения' && i.blockItem[z].value[0] !== '') {
                str += `<trsdo:VehicleShaftRotationFrequencyMeasure measurementUnitCode="RPM">${i.blockItem[z].value[0]}</trsdo:VehicleShaftRotationFrequencyMeasure>`;
              }
              if (
                i.blockItem[z].name ===
                'Отношение к частоте вращения двигателя вала отбора мощности' &&
                i.blockItem[z].value[0] !== ''
              ) {
                str += `<trsdo:TransmissionUnitGearRate>${i.blockItem[z].value[0]}</trsdo:TransmissionUnitGearRate>`;
              }
              if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '' && z !== 0) {
                str += `</trcdo:VehiclePowerTakeOffDetails></trcdo:TransmissionUnitDetails><trcdo:TransmissionUnitDetails><trsdo:VehicleUnitKindCode>20</trsdo:VehicleUnitKindCode><trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
              }
            }
            str += '</trcdo:VehiclePowerTakeOffDetails></trcdo:TransmissionUnitDetails>';
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getSuspension = (): string => {
    let str = '';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 35 && 'check' in i && i.check === false) {
          str += '<trcdo:VehicleSuspensionDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Вид подвески' && z === 0) {
              str += `<trsdo:VehicleSuspensionKindCode>${suspension[i.blockItem[z].value[0]]
                }</trsdo:VehicleSuspensionKindCode>`;
            }
            if (i.blockItem[z].name === 'Описание' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:VehicleSuspensionDetails>`;
            } else if (i.blockItem[z].name === 'Описание' && i.blockItem[z].value[0] === '') {
              str += `</trcdo:VehicleSuspensionDetails>`;
            }
            if (i.blockItem[z].name === 'Вид подвески' && z !== 0) {
              str += `<trcdo:VehicleSuspensionDetails><trsdo:VehicleSuspensionKindCode>${suspension[i.blockItem[z].value[0]]
                }</trsdo:VehicleSuspensionKindCode>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getSteering = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 36 && 'check' in i && i.check === false) {
          str += '<trcdo:VehicleSteeringDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Положение рулевого колеса' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z + 1].value[0]
                }</trsdo:VehicleComponentText>
                            <trsdo:SteeringWheelPositionCode>${steeringType[i.blockItem[z].value[0]]
                }</trsdo:SteeringWheelPositionCode>
                            <trsdo:VehicleComponentLocationText>${i.blockItem[z].value[0]
                }</trsdo:VehicleComponentLocationText>`;
            }
          }
          str += '</trcdo:VehicleSteeringDetails>';
        }
        return i;
      });
      return item;
    });
    if (str === '<trcdo:VehicleSteeringDetails></trcdo:VehicleSteeringDetails>') str = '';
    return str;
  };

  const getTyreKindIndex = (): string[] => {
    let str: string[] = [];
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 27) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Размерность') {
              if (
                i.blockItem[z + 2].value[0] !== '' &&
                i.blockItem[z + 3].value[0] !== '' &&
                i.blockItem[z + 4].value[0] !== '' &&
                i.blockItem[z + 5].value[0] !== ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${i.blockItem[z + 2].value[0]}-${i.blockItem[z + 3].value[0]
                  }/${i.blockItem[z + 4].value[0]}-${i.blockItem[z + 5].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                i.blockItem[z + 2].value[0] !== '' &&
                i.blockItem[z + 3].value[0] === '' &&
                i.blockItem[z + 4].value[0] !== '' &&
                i.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${i.blockItem[z + 2].value[0]}/${i.blockItem[z + 4].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                i.blockItem[z + 2].value[0] !== '' &&
                i.blockItem[z + 3].value[0] !== '' &&
                i.blockItem[z + 4].value[0] === '' &&
                i.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${i.blockItem[z + 2].value[0]}-${i.blockItem[z + 3].value[0]
                  }/-</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                i.blockItem[z + 2].value[0] !== '' &&
                i.blockItem[z + 3].value[0] === '' &&
                i.blockItem[z + 4].value[0] === '' &&
                i.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>${i.blockItem[z + 2].value[0]
                  }/-</trsdo:VehicleTyreKindIndex>`
                );
              } else if (
                i.blockItem[z + 2].value[0] === '' &&
                i.blockItem[z + 3].value[0] === '' &&
                i.blockItem[z + 4].value[0] !== '' &&
                i.blockItem[z + 5].value[0] === ''
              ) {
                str.push(
                  `<trsdo:VehicleTyreKindIndex>-/${i.blockItem[z + 4].value[0]
                  }</trsdo:VehicleTyreKindIndex>`
                );
              } else str.push('');
            }
          }
        }
        return i;
      });
      return item;
    });
    return str;
  };

  const getTyre = (check: boolean): string => {
    let str = '';
    let str2 = [];
    if (check === false)
      blockss.map((item) => {
        item.blocksItem.map((i) => {
          if (i.id === 27 && 'check' in i && i.check === false) {
            str += `<trcdo:VehicleTyreKindInfo>`;
            str2 = getTyreKindIndex();
            for (let z = 0; z < i.blockItem.length; z++) {
              if (
                i.blockItem[z].name === 'Размерность' &&
                i.blockItem[z].value[0] !== '' &&
                z === 2
              ) {
                str += `<trsdo:VehicleTyreKindSize>${i.blockItem[z].value[0]}</trsdo:VehicleTyreKindSize>`;
                str += `${str2.shift()}`;
              } else if (
                i.blockItem[z].name === 'Размерность' &&
                i.blockItem[z].value[0] === '' &&
                z === 2
              ) {
                str += `${str2.shift()}`;
              }
              if (
                i.blockItem[z].name === 'Скоростная категория' &&
                i.blockItem[z].value[0] !== ''
              ) {
                str += `<trsdo:VehicleTyreKindSpeed>${i.blockItem[z].value}</trsdo:VehicleTyreKindSpeed>`;
              }
              if (
                i.blockItem[z].name === 'Шина временного использования' &&
                i.blockItem[z].name !== ''
              ) {
                str += `<trsdo:IsSupplementVehicleTyre>${i.blockItem[z].value[0] === '' || i.blockItem[z].value[0] === 'false'
                    ? 'false'
                    : 'true'
                  }</trsdo:IsSupplementVehicleTyre>`;
              }
              if (
                i.blockItem[z].name === 'Размерность' &&
                i.blockItem[z].value[0] !== '' &&
                z !== 2
              ) {
                str += `</trcdo:VehicleTyreKindInfo><trcdo:VehicleTyreKindInfo><trcdo:VehicleTyreKindSize>${i.blockItem[z].value[0]}</trcdo:VehicleTyreKindSize>`;
                str += `${str2.shift()}`;
              } else if (
                i.blockItem[z].name === 'Размерность' &&
                i.blockItem[z].value[0] === '' &&
                z !== 2
              ) {
                str += '</trcdo:VehicleTyreKindInfo><trcdo:VehicleTyreKindInfo>';
                str += `${str2.shift()}`;
              }
            }
            str += `</trcdo:VehicleTyreKindInfo>`;
          }
          return i;
        });
        return item;
      });

    return str;
  };

  const getOverallDimension = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 9) {
          str += '<trcdo:VehicleOverallDimensionDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Длина' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:LengthMeasure measurementUnitCode="MMT">${i.blockItem[z].value[0]}</csdo:LengthMeasure>`;
            }
            if (i.blockItem[z].name === 'Ширина' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:WidthMeasure measurementUnitCode="MMT">${i.blockItem[z].value[0]}</csdo:WidthMeasure>`;
            }
            if (i.blockItem[z].name === 'Высота' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:HeightMeasure measurementUnitCode="MMT">${i.blockItem[z].value[0]}</csdo:HeightMeasure>`;
            }
          }
          str += '</trcdo:VehicleOverallDimensionDetails>';
        }
        return i;
      });
      return item;
    });
    if (str === '<trcdo:VehicleOverallDimensionDetails></trcdo:VehicleOverallDimensionDetails>')
      str = '';
    return str;
  };

  const getTrailer = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 14) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Буксировка прицепа') {
              str += `<trsdo:NotVehicleTrailerIndicator>${i.blockItem[z].value[0]}</trsdo:NotVehicleTrailerIndicator>`;
            }
            if (
              i.blockItem[z].name === 'Масса прицепа без тормозной системы' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleMaxUnbrakedTrailerWeightMeasure measurementUnitCode="KGM">${i.blockItem[z].value[0]}</trsdo:VehicleMaxUnbrakedTrailerWeightMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Масса прицепа с тормозной системой' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleMaxBrakedTrailerWeightMeasure measurementUnitCode="KGM">${i.blockItem[z].value[0]}</trsdo:VehicleMaxBrakedTrailerWeightMeasure>`;
            }
            if (
              i.blockItem[z].name ===
              'Технически допустимая статическая вертикальная нагрузка в точке сцепки тягово-сцепного устройства' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleHitchLoadMeasure measurementUnitCode="KGM">${i.blockItem[z].value[0]}</trsdo:VehicleHitchLoadMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Техническая допустимая буксируемая масса' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:PermissibleTowableWeightMeasure measurementUnitCode="KGM">${i.blockItem[z].value[0]}</trsdo:PermissibleTowableWeightMeasure>`;
            }
          }
        }
        return i;
      });
      return item;
    });
    return str;
  };

  const getFuel = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 18 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Топливо' && i.blockItem[z].value[0] !== '') {
              i.blockItem[z].value.map((el) => {
                str += `<trsdo:VehicleFuelKindCode>${fuelType[el]}</trsdo:VehicleFuelKindCode>
                                <trsdo:VehicleFuelKindName>${el}</trsdo:VehicleFuelKindName>`;
                return el;
              });
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getFuelFeed = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 19 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип системы питания' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:FuelFeedDetails><trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:FuelFeedDetails>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getIgnition = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 21 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип cистемы зажигания' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:VehicleIgnitionDetails><trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:VehicleIgnitionDetails>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getExhaust = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 22 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:ExhaustDetails><trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText></trcdo:ExhaustDetails>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getVoltage = (): string => {
    let str = '';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 26 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Номинальное напряжение' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleVoltageMeasure measurementUnitCode="VLT">${i.blockItem[z].value[0]}</trsdo:VehicleVoltageMeasure>`;
            }
          }
        }
        return i;
      });
      return item;
    });
    return str;
  };

  const getMaxSpeed = (): string => {
    let str = '';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 38) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Максимальная скорость' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleMaxSpeedMeasure measurementUnitCode="KMH">${i.blockItem[z].value[0]}</trsdo:VehicleMaxSpeedMeasure>`;
            }
          }
        }
        return i;
      });
      return item;
    });
    return str;
  };

  const getBrakingSystem = (): string => {
    let str = '';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 37 && 'check' in i && i.check === false) {
          str += '<trcdo:VehicleBrakingSystemDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              i.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:VehicleBrakingSystemKindCode>${brakingType[i.blockItem[z].value[0]]
                }</trsdo:VehicleBrakingSystemKindCode>`;
            }
            if (i.blockItem[z].name === 'Описание' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              i.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              i.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleBrakingSystemDetails><trcdo:VehicleBrakingSystemDetails><trsdo:VehicleBrakingSystemKindCode>${brakingType[i.blockItem[z].value[0]]
                }</trsdo:VehicleBrakingSystemKindCode>`;
            } else if (
              i.blockItem[z].name === 'Наименование элемента тормозной системы' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleBrakingSystemDetails><trcdo:VehicleBrakingSystemDetails>`;
            }
          }
          str += '</trcdo:VehicleBrakingSystemDetails>';
        }
        return i;
      });
      return item;
    });

    if (str === '<trcdo:VehicleBrakingSystemDetails></trcdo:VehicleBrakingSystemDetails>') str = '';
    return str;
  };

  const getEngineQuantity = (): string => {
    let str = '';
    let count = 0;
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 16 || i.id === 17 || i.id === 23 || i.id === 24) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '') {
              count++;
            }
          }
        }
        return i;
      });
      return item;
    });
    str += `<trsdo:EngineQuantity>${count}</trsdo:EngineQuantity>`;
    return str;
  };

  const getEngine = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 16 && 'check' in i && i.check === false) {
          str += '<trcdo:EngineDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Количество цилиндров' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:EngineCylinderQuantity>${i.blockItem[z].value[0]}</trsdo:EngineCylinderQuantity>`;
            }
            if (
              i.blockItem[z].name === 'Расположение цилиндров' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderArrangementText>${i.blockItem[z].value[0]}</trsdo:EngineCylinderArrangementText>`;
            }
            if (
              i.blockItem[z].name === 'Рабочий объем цилиндров' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCapacityMeasure measurementUnitCode="CMQ">${i.blockItem[z].value[0]}</trsdo:EngineCapacityMeasure>`;
            }
            if (i.blockItem[z].name === 'Степень сжатия' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineCompressionRate>${i.blockItem[z].value[0]}</trcdo:EngineCompressionRate>`;
            }
            if (i.blockItem[z].name === 'Максимальная мощность' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineMaxPowerDetails>
                            <csdo:EngineMaxPowerMeasure measurementUnitCode="KWT" measurementUnitCodeListId="NSI_033">${i.blockItem[z].value[0]}</csdo:EngineMaxPowerMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Максимальная мощность' &&
              (i.blockItem[z + 1].value[0] !== '' || i.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (i.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${i.blockItem[z + 1].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (i.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${i.blockItem[z + 2].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxPowerDetails>`;
            } else if (
              i.blockItem[z].name === 'Максимальная мощность' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === ''
            ) {
              str += `</trcdo:EngineMaxPowerDetails>`;
            }

            if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxTorqueDetails>
                            <trsdo:EngineMaxTorqueMeasure measurementUnitCode="NMT">${i.blockItem[z].value[0]}</trsdo:EngineMaxTorqueMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              (i.blockItem[z + 1].value[0] !== '' || i.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (i.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${i.blockItem[z + 1].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (i.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${i.blockItem[z + 2].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxTorqueDetails>`;
            } else if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === '' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += ``;
            } else if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === '' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `</trcdo:EngineMaxTorqueDetails>`;
            }

            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails><trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              i.blockItem[z].name === 'Марка' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails>`;
            }
          }
          str += '</trcdo:EngineDetails>';
        }
        if (i.id === 23 && 'check' in i && i.check === false) {
          str += '<trcdo:EngineDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Количество цилиндров' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:EngineCylinderQuantity>${i.blockItem[z].value[0]}</trsdo:EngineCylinderQuantity>`;
            }
            if (
              i.blockItem[z].name === 'Расположение цилиндров' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCylinderArrangementText>${i.blockItem[z].value[0]}</trsdo:EngineCylinderArrangementText>`;
            }
            if (
              i.blockItem[z].name === 'Рабочий объем цилиндров' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineCapacityMeasure measurementUnitCode="CMQ">${i.blockItem[z].value[0]}</trsdo:EngineCapacityMeasure>`;
            }
            if (i.blockItem[z].name === 'Степень сжатия' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineCompressionRate>${i.blockItem[z].value[0]}</trcdo:EngineCompressionRate>`;
            }
            if (i.blockItem[z].name === 'Максимальная мощность' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:EngineMaxPowerDetails>
                            <csdo:EngineMaxPowerMeasure measurementUnitCode="KWT" measurementUnitCodeListId="NSI_033">${i.blockItem[z].value[0]}</csdo:EngineMaxPowerMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Максимальная мощность' &&
              (i.blockItem[z + 1].value[0] !== '' || i.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (i.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${i.blockItem[z + 1].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (i.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${i.blockItem[z + 2].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxPowerDetails>`;
            } else if (
              i.blockItem[z].name === 'Максимальная мощность' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === ''
            ) {
              str += `</trcdo:EngineMaxPowerDetails>`;
            }

            if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:EngineMaxTorqueDetails>
                            <trsdo:EngineMaxTorqueMeasure measurementUnitCode="NMT">${i.blockItem[z].value[0]}</trsdo:EngineMaxTorqueMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              (i.blockItem[z + 1].value[0] !== '' || i.blockItem[z + 2].value[0] !== '')
            ) {
              str += `<trcdo:VehicleShaftRotationFrequency>`;
              if (i.blockItem[z + 1].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMinMeasure measurementUnitCode="RPM">${i.blockItem[z + 1].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMinMeasure>`;
              }
              if (i.blockItem[z + 2].value[0] !== '') {
                str += `<trcdo:VehicleShaftRotationFrequencyMaxMeasure measurementUnitCode="RPM">${i.blockItem[z + 2].value[0]
                  }</trcdo:VehicleShaftRotationFrequencyMaxMeasure>`;
              }
              str += `</trcdo:VehicleShaftRotationFrequency></trcdo:EngineMaxTorqueDetails>`;
            } else if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === '' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += ``;
            } else if (
              i.blockItem[z].name === 'Максимальный крутящий момент' &&
              i.blockItem[z + 1].value[0] === '' &&
              i.blockItem[z + 2].value[0] === '' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `</trcdo:EngineMaxTorqueDetails>`;
            }

            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails><trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            } else if (
              i.blockItem[z].name === 'Марка' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:EngineDetails><trcdo:EngineDetails>`;
            }
          }
          str += '</trcdo:EngineDetails>';
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getEngineLocation = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 7) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Положение и размещение приводного двигателя (двигателей)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              i.blockItem[z].value.map((el) => {
                str += `<trsdo:VehicleComponentLocationText>${el}</trsdo:VehicleComponentLocationText>`;
                return el;
              });
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getElectricalEngine = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 24 && 'check' in i && i.check === false) {
          str +=
            '<trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              i.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${i.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (i.blockItem[z].name === 'Рабочее напряжение' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${i.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>
                            <trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode><trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        if (i.id === 17 && 'check' in i && i.check === false) {
          str +=
            '<trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              i.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${i.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (i.blockItem[z].name === 'Рабочее напряжение' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${i.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>
                            <trsdo:ElectricalMachineKindCode>01</trsdo:ElectricalMachineKindCode><trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getElectricalMachine = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 34 && 'check' in i && i.check === false) {
          str += '<trcdo:VehicleElectricalMachineDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Вид электромашины' &&
              i.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trsdo:ElectricalMachineKindCode>${electricalMachineType[i.blockItem[z].value[0]]
                }</trsdo:ElectricalMachineKindCode>`;
            }
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentMakeName>${i.blockItem[z].value[0]}</trsdo:VehicleComponentMakeName>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (
              i.blockItem[z].name === 'Максимальная 30-минутная мощность' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ElectricMotorPowerMeasure measurementUnitCode="KWT">${i.blockItem[z].value[0]}</trsdo:ElectricMotorPowerMeasure>`;
            }
            if (i.blockItem[z].name === 'Рабочее напряжение' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:ElectricalMachineVoltageMeasure measurementUnitCode="VLT">${i.blockItem[z].value[0]}</trsdo:ElectricalMachineVoltageMeasure>`;
            }
            if (
              i.blockItem[z].name === 'Вид электромашины' &&
              i.blockItem[z].value[0] !== '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails><trsdo:ElectricalMachineKindCode>${electricalMachineType[i.blockItem[z].value[0]]
                }</trsdo:ElectricalMachineKindCode>`;
            } else if (
              i.blockItem[z].name === 'Вид электромашины' &&
              i.blockItem[z].value[0] === '' &&
              z !== 0
            ) {
              str += `</trcdo:VehicleElectricalMachineDetails><trcdo:VehicleElectricalMachineDetails>`;
            }
          }
          str += '</trcdo:VehicleElectricalMachineDetails>';
        }
        return i;
      });
      return item;
    });
    if (str === '<trcdo:VehicleElectricalMachineDetails></trcdo:VehicleElectricalMachineDetails>')
      str = '';
    return str;
  };

  const getMass = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 12) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Вид массы' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleMassMeasure measurementUnitCode="KGM" vehicleMassCode="${massType[i.blockItem[z].value[0]]
                }">${i.blockItem[z + 1].value[0]}</trsdo:VehicleMassMeasure>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getECUModel = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 20 && 'check' in i && i.check === false) {
          if (i.blockItem[0].value[0] !== '') {
            str += `<trsdo:ECUModelCode>${i.blockItem[0].value[0]}</trsdo:ECUModelCode>`;
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getIdInfo = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 1) {
          str += '<trcdo:VehicleIdInfoDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              (i.blockItem[z].name === 'Идентификационный номер' ||
                i.blockItem[z].name === 'Заводской номер') &&
              i.blockItem[z].value[0] !== '' &&
              z === 0
            ) {
              str += `<trcdo:VehicleIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                            </trcdo:VehicleIdDetails>`;
            } else if (
              (i.blockItem[z].name === 'Идентификационный номер' ||
                i.blockItem[z].name === 'Заводской номер') &&
              i.blockItem[z].value[0] === '' &&
              z === 0
            ) {
              str += `<trcdo:VehicleIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                            </trcdo:VehicleIdDetails>`;
            }
            if (
              i.blockItem[z].name === 'Номер двигателя' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z].id === 9
            ) {
              str += `<trcdo:VehicleEngineIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEngineIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер двигателя' &&
              i.blockItem[z].value[0] === '' &&
              i.blockItem[z].id === 9
            ) {
              str += `<trcdo:VehicleEngineIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEngineIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер двигателя' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z].id !== 9
            ) {
              str = insert(
                str,
                `<trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>`,
                str.lastIndexOf(
                  `<trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator></trcdo:VehicleEngineIdDetails>`
                ) -
                `<trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                                </trcdo:VehicleEngineIdDetails`.length
              );
            }
            if (
              i.blockItem[z].name === 'Номер кузова (кабины, прицепа, рамы)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:MachineBodyIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MachineBodyIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер кузова (кабины, прицепа, рамы)' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:MachineBodyIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MachineBodyIdDetails>`;
            }
            if (i.blockItem[z].name === 'Номер коробки передач' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:GearboxIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:GearboxIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер коробки передач' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:GearboxIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:GearboxIdDetails>`;
            }
            if (
              i.blockItem[z].name === 'Номер основного ведущего моста' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z].id === 12
            ) {
              str += `<trcdo:MainPoweredAxleIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MainPoweredAxleIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер основного ведущего моста' &&
              i.blockItem[z].value[0] === '' &&
              i.blockItem[z].id === 12
            ) {
              str += `<trcdo:MainPoweredAxleIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:MainPoweredAxleIdDetails>`;
            } else if (
              i.blockItem[z].name === 'Номер основного ведущего моста' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z].id !== 12
            ) {
              str = insert(
                str,
                `<trsdo:VehicleIdentityNumberId>${i.blockItem[z].value[0]}</trsdo:VehicleIdentityNumberId>`,
                str.indexOf(
                  `<trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator></trcdo:MainPoweredAxleIdDetails>`
                ) -
                `<trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                                </trcdo:MainPoweredAxleIdDetails`.length
              );
            }
          }
        }
        if (i.id === 41) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name ===
              'Сведения об идентификационном номере устройства вызова экстренных оперативных служб' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:VehicleEmergencyCallDeviceIdDetails>
                            <trsdo:VehicleIdentityNumberId>${i.blockItem[1].value[0]}</trsdo:VehicleIdentityNumberId>
                            <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEmergencyCallDeviceIdDetails>`;
            } else if (
              i.blockItem[z].name ===
              'Сведения об идентификационном номере устройства вызова экстренных оперативных служб' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:VehicleEmergencyCallDeviceIdDetails>
                            <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                        </trcdo:VehicleEmergencyCallDeviceIdDetails>`;
            }
            if (
              i.blockItem[z].name ===
              'Сведения об идентификационном номере аппаратуры спутниковой навигации' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trcdo:VehicleSatelliteNavigationIdDetails>
                        <trsdo:VehicleIdentityNumberId>${i.blockItem[0].value[0]}</trsdo:VehicleIdentityNumberId>
                        <trsdo:NotVehicleIdentityNumberIndicator>false</trsdo:NotVehicleIdentityNumberIndicator>
                    </trcdo:VehicleSatelliteNavigationIdDetails>`;
            } else if (
              i.blockItem[z].name ===
              'Сведения об идентификационном номере аппаратуры спутниковой навигации' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trcdo:VehicleSatelliteNavigationIdDetails>
                        <trsdo:NotVehicleIdentityNumberIndicator>true</trsdo:NotVehicleIdentityNumberIndicator>
                    </trcdo:VehicleSatelliteNavigationIdDetails>`;
            }
          }
          str += '</trcdo:VehicleIdInfoDetails>';
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getVehicleDetails = (): string => {
    let str = '';
    str += '<trcdo:VehicleDetails>';
    str += getIdInfo();
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 0) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Категория в соответствии с Правилами оформления' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:MachineCategoryCode>${categoryId[i.blockItem[z].value[0]]
                }</trsdo:MachineCategoryCode>`;
            }
          }
        }
        if (i.id === 1) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name ===
              'Наименование, определяемое назначением самоходной машины (другого вида техники) ' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleCharacteristicsName>${i.blockItem[z].value[0]}</trsdo:VehicleCharacteristicsName>`;
            }
            if (
              i.blockItem[z].name === 'Цвет кузова (кабины, прицепа)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              i.blockItem[z].value.map((el) => {
                str += `<trsdo:VehicleBodyColourCode>${color[el]}</trsdo:VehicleBodyColourCode>`;
                return el;
              });
            }
            if (
              i.blockItem[z].name === 'Признак комбинированного цвета кузова (кабины, прицепа)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:BodyMultiColourIndicator>${i.blockItem[z].value[0]}</trsdo:BodyMultiColourIndicator>`;
            }
            if (
              i.blockItem[z].name === 'Наименование оттенка цвета кузова (кабины, прицепа)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleBodyColourName>${i.blockItem[z].value[0]}</trsdo:VehicleBodyColourName>`;
            }
            if (i.blockItem[z].name === 'Год изготовления' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:ManufactureYear>${i.blockItem[z].value[0]}</csdo:ManufactureYear>`;
            }
            if (i.blockItem[z].name === 'Месяц изготовления' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:ManufactureMonth>--${month[i.blockItem[z].value[0]]
                }</csdo:ManufactureMonth>`;
            }
          }
        }
        if (i.id === 39) {
          if (
            i.blockItem[0].name === 'Дополнительные характеристики' &&
            i.blockItem[0].value[0] !== ''
          ) {
            str += `<csdo:NoteText>${i.blockItem[0].value[0]}</csdo:NoteText>`;
          }
        }
        return i;
      });
      return item;
    });

    str += '</trcdo:VehicleDetails>';
    return str;
  };

  const getPowerStorage = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 60 && 'check' in i && i.check === false) {
          str += '<trcdo:PowerStorageDeviceDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '' && z === 0) {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Место расположения' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentLocationText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
            }
            if (i.blockItem[z].name === 'Запас хода' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleRangeMeasure measurementUnitCode="KM">${i.blockItem[z].value[0]}</trsdo:VehicleRangeMeasure>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '' && z !== 0) {
              str += `</trcdo:PowerStorageDeviceDetails><trcdo:PowerStorageDeviceDetails><trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            } else if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] === '' && z !== 0) {
              str += `</trcdo:PowerStorageDeviceDetails><trcdo:PowerStorageDeviceDetails>`;
            }
          }
          str += `</trcdo:PowerStorageDeviceDetails>`;
        }
        return i;
      });
      return item;
    });
    if (str === '<trcdo:PowerStorageDeviceDetails></trcdo:PowerStorageDeviceDetails>') str = '';
    return str;
  };

  const getDocumentDetails = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 43) {
          str +=
            '<trsdo:VehicleEPassportRegistrationReasonCode>01</trsdo:VehicleEPassportRegistrationReasonCode><trcdo:OwnerDocDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Наименование документа' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<csdo:DocKindCode codeListId="NSI_113">2</csdo:DocKindCode><csdo:DocKindName>${i.blockItem[z].value[0]}</csdo:DocKindName>`;
            }
            if (i.blockItem[z].name === 'Номер документа' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:DocId>${i.blockItem[z].value[0]}</csdo:DocId>`;
            }
            if (i.blockItem[z].name === 'Дата документа' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:DocCreationDate>${i.blockItem[z].value[0]}+03:00</csdo:DocCreationDate>`;
            }
            if (i.blockItem[z].name === 'Кем выдано' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:AuthorityName>${i.blockItem[z].value[0]}</csdo:AuthorityName>`;
            }
          }
          str += '</trcdo:OwnerDocDetails>';
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getVehicleTypeDetails = (): string => {
    let str = '';
    str += '<trcdo:VehicleTypeDetails>';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 0) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:NotVehicleMakeNameIndicator>false</trsdo:NotVehicleMakeNameIndicator>
                            <csdo:VehicleMakeName>${i.blockItem[z].value[0]}</csdo:VehicleMakeName>
                            <trsdo:VehicleMakeCode>${brands[i.blockItem[z].value[0]]
                  ? brands[i.blockItem[z].value[0]]
                  : i.blockItem[z + 1].value[0]
                }</trsdo:VehicleMakeCode>`;
            } else if (i.blockItem[z].name === 'Марка' && i.blockItem[z].value[0] === '') {
              str += `<trsdo:NotVehicleMakeNameIndicator>true</trsdo:NotVehicleMakeNameIndicator>`;
            }
            if (
              i.blockItem[z].name === 'Коммерческое наименование' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:NotVehicleCommercialNameIndicator>false</trsdo:NotVehicleCommercialNameIndicator>
                            <csdo:VehicleCommercialName>${i.blockItem[z].value[0]}</csdo:VehicleCommercialName>`;
            } else if (
              i.blockItem[z].name === 'Коммерческое наименование' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trsdo:NotVehicleCommercialNameIndicator>true</trsdo:NotVehicleCommercialNameIndicator>`;
            }
            if (i.blockItem[z].name === 'Тип' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTypeId>${i.blockItem[z].value[0]}</trsdo:VehicleTypeId>`;
            }
            if (
              i.blockItem[z].name ===
              'Категория в соответствии с ТР ТС 031/2012 или ТР ТС 010/2011 или ТР ТС 018/2011 ' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:MachineTechCategoryCode>${i.blockItem[z].value[0]}</trsdo:MachineTechCategoryCode>`;
            }
          }
        }
        if (i.id === 1) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Тип движителя' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:PropulsionKindCode>${typePropulsion[i.blockItem[z].value[0]]
                }</trsdo:PropulsionKindCode>
                            <trsdo:PropulsionKindName>${i.blockItem[z].value[0]
                }</trsdo:PropulsionKindName>`;
            }
            if (
              i.blockItem[z].name === 'Сведения о наличии реверсивного места оператора' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:ReversibleControlIndicator>${i.blockItem[z].value[0]}</trsdo:ReversibleControlIndicator>`;
            }
          }
        }
        if (i.id === 7) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Схема компоновки' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleLayoutPatternText>${i.blockItem[z].value[0]}</trsdo:VehicleLayoutPatternText>`;
            }
          }
        }
        if (i.id === 49) {
          for (let z = 0; z < i.blockItem[0].value.length; z++) {
            if ('files' in i.blockItem[0])
              if (i.blockItem[0].value[0] !== '')
                str += `<trsdo:VehiclePicture fileName="${i.blockItem[0].files[z]}">${i.blockItem[0].value[z]}</trsdo:VehiclePicture>`;
          }
        }
        return i;
      });
      return item;
    });
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 15 && 'check' in i && i.check === false) {
          if (i.blockItem[0].value[0] !== '')
            str += `<trsdo:VehicleHybridDesignText>${i.blockItem[0].value[0]}</trsdo:VehicleHybridDesignText>`;
        }
        return i;
      });
      return item;
    });

    str += getLabeling();
    str += '</trcdo:VehicleTypeDetails>';
    return str;
  };

  const getLabeling = (): string => {
    let str = '';
    let check = false;

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 2 && 'check' in i && i.check === false) {
          str += `<trcdo:VehicleLabelingDetails>`;
          check = true;
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z + 1].name !== 'Место расположения таблички изготовителя'
            ) {
              str += `<trsdo:VehicleComponentLocationText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>
                            <trsdo:NotManufacturerPlateIndicator>false</trsdo:NotManufacturerPlateIndicator>`;
            } else if (
              i.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              i.blockItem[z].value[0] !== '' &&
              i.blockItem[z + 1].name === 'Место расположения таблички изготовителя'
            ) {
              str += `<trsdo:VehicleComponentLocationText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentLocationText>`;
            } else if (
              i.blockItem[z].name === 'Место расположения таблички изготовителя' &&
              i.blockItem[z].value[0] === ''
            ) {
              str += `<trsdo:NotManufacturerPlateIndicator>true</trsdo:NotManufacturerPlateIndicator>`;
            }
            if (
              i.blockItem[z].name ===
              'Место расположения идентификационного номера самоходной машины (другого вида техники)' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleIdentificationNumberLocationText>${i.blockItem[z].value[0]}</trsdo:VehicleIdentificationNumberLocationText>`;
            }
          }
        }
        if (i.id === 2 && 'check' in i && i.check === true) {
          str += `<trcdo:VehicleLabelingDetails><trsdo:NotManufacturerPlateIndicator>true</trsdo:NotManufacturerPlateIndicator>`;
        }
        if (i.id === 4 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Место расположения номера двигателя' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:EngineIdentificationNumberLocationText>${i.blockItem[z].value[0]}</trsdo:EngineIdentificationNumberLocationText>`;
            }
          }
        }
        return i;
      });
      return item;
    });
    str += getIdCharacter();
    str += getEngineIdCharacter();

    str += `</trcdo:VehicleLabelingDetails>`;
    if (str === `</trcdo:VehicleLabelingDetails>`) str = '';
    return str;
  };

  const getIdCharacter = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 3) {
          // описание маркировки
          if ('check' in i && i.check !== true) {
            for (let z = 0; z < i.blockItem.length; z++) {
              if (i.blockItem[z].name === 'С' && z === 0)
                str += `<trcdo:VehicleIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${i.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
              if (i.blockItem[z].name === 'По')
                str +=
                  i.blockItem[z + 2].value[0] !== ''
                    ? `<trsdo:IdCharacterQuantity>${i.blockItem[z + 2].value[0].length
                    }</trsdo:IdCharacterQuantity>`
                    : `<trsdo:IdCharacterQuantity>${parseInt(i.blockItem[z].value[0]) - parseInt(i.blockItem[z - 1].value[0])
                    }</trsdo:IdCharacterQuantity>`;
              if (i.blockItem[z].name === 'Описание')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterText>${i.blockItem[z].value[0]}</trsdo:IdCharacterText>`;
              if (i.blockItem[z].name === 'Значение')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trcdo:IdCharacterValueDetails><trsdo:IdCharacterValueCode>${i.blockItem[z].value[0]}</trsdo:IdCharacterValueCode>`;
              if (i.blockItem[z].name === 'Расшифровка значения')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterValueText>${i.blockItem[z].value[0]}</trsdo:IdCharacterValueText></trcdo:IdCharacterValueDetails>`;
              if (i.blockItem[z].name === 'С' && z !== 0)
                str += `</trcdo:VehicleIdCharacterDetails><trcdo:VehicleIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${i.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
            }
            str += `</trcdo:VehicleIdCharacterDetails>`;
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getEngineIdCharacter = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 5) {
          //описание маркировки двигателя
          if ('check' in i && i.check !== true) {
            for (let z = 0; z < i.blockItem.length; z++) {
              if (i.blockItem[z].name === 'С' && z === 0)
                str += `<trcdo:EngineIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${i.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
              if (i.blockItem[z].name === 'По')
                str +=
                  i.blockItem[z + 2].value[0] !== ''
                    ? `<trsdo:IdCharacterQuantity>${i.blockItem[z + 2].value[0].length
                    }</trsdo:IdCharacterQuantity>`
                    : `<trsdo:IdCharacterQuantity>${parseInt(i.blockItem[z].value[0]) - parseInt(i.blockItem[z - 1].value[0])
                    }</trsdo:IdCharacterQuantity>`;
              if (i.blockItem[z].name === 'Описание')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterText>${i.blockItem[z].value[0]}</trsdo:IdCharacterText>`;
              if (i.blockItem[z].name === 'Значение')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trcdo:IdCharacterValueDetails><trsdo:IdCharacterValueCode>${i.blockItem[z].value[0]}</trsdo:IdCharacterValueCode>`;
              if (i.blockItem[z].name === 'Расшифровка значения')
                str +=
                  i.blockItem[z].value[0] === ''
                    ? ''
                    : `<trsdo:IdCharacterValueText>${i.blockItem[z].value[0]}</trsdo:IdCharacterValueText></trcdo:IdCharacterValueDetails>`;
              if (i.blockItem[z].name === 'С' && z !== 0)
                str += `</trcdo:EngineIdCharacterDetails><trcdo:EngineIdCharacterDetails><trsdo:IdCharacterStartingOrdinal>${i.blockItem[z].value[0]}</trsdo:IdCharacterStartingOrdinal>`;
            }
            str += `</trcdo:EngineIdCharacterDetails>`;
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getTNVEDNumber = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 0) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Код ТН ВЭД' && i.blockItem[z].value[0] !== '') {
              str += `<trcdo:TNVEDNumber>${i.blockItem[z].value[0]}</trcdo:TNVEDNumber>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getBodywork = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 7) {
          str += '<trcdo:VehicleBodyworkDetails>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Количество дверей' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleDoorQuantity>${i.blockItem[z].value[0]}</trsdo:VehicleDoorQuantity>`;
            }
            if (
              i.blockItem[z].name === 'Исполнение загрузочного пространства' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:VehicleCarriageSpaceImplementationText>${i.blockItem[z].value[0]}</trsdo:VehicleCarriageSpaceImplementationText>`;
            }
            if (i.blockItem[z].name === 'Тип кузова' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleComponentText>${i.blockItem[z].value[0]}</trsdo:VehicleComponentText>`;
            }
            if (i.blockItem[z].name === 'Пассажировместимость' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehiclePassengerQuantity>${i.blockItem[z].value[0]}</trsdo:VehiclePassengerQuantity>`;
            }
          }
          str += '</trcdo:VehicleBodyworkDetails>';
        }
        return i;
      });
      return item;
    });

    if (str === '<trcdo:VehicleBodyworkDetails></trcdo:VehicleBodyworkDetails>') str = '';

    return str;
  };

  const getRunningGear = (check: boolean): string => {
    let str = '';
    let osi = 0;
    str += '<trcdo:VehicleRunningGearDetails>';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 6 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Количество колес' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleWheelQuantity>${i.blockItem[z].value[0]}</trsdo:VehicleWheelQuantity>`;
            }
            if (
              i.blockItem[z].name === 'Количество ведущих колес' &&
              i.blockItem[z].value[0] !== ''
            ) {
              str += `<trsdo:PoweredWheelQuantity>${i.blockItem[z].value[0]}</trsdo:PoweredWheelQuantity>`;
            }
            if (i.blockItem[z].name === 'Количество осей') {
              osi = parseInt(i.blockItem[z].value[0]);
            }
          }
        }
        if (i.id === 7) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Рама' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:MachineFrameText>${i.blockItem[z].value[0]}</trsdo:MachineFrameText>`;
            }
          }

          for (let z = 0; z < osi; z++) {
            str += getAxes(`${z + 1}-ая ось`, check);
          }
        }
        if (i.id === 10 && 'check' in i && i.check === false) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'База' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleWheelbaseMeasure measurementUnitCode="MMT">${i.blockItem[z].value[0]}</trsdo:VehicleWheelbaseMeasure>`;
            }
          }
        }
        if (i.id === 9) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Дорожный просвет' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleGroundClearanceMeasure measurementUnitCode="MMT">${i.blockItem[z].value[0]}</trsdo:VehicleGroundClearanceMeasure>`;
            }
          }
        }
        return i;
      });
      return item;
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
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 0) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Модификация' && i.blockItem[z].value[0] !== '') {
              str += `<trsdo:VehicleTypeVariantId>${i.blockItem[z].value[0]}</trsdo:VehicleTypeVariantId>`;
            }
          }
        }
        return i;
      });
      return item;
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

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 44) {
          str += '<doc:OwnerDetails><doc:SignersList>';
          for (let z = 0; z < i.blockItem.length; z++) {
            if (
              i.blockItem[z].name === 'Тип владельца' &&
              i.blockItem[z].value[0] === 'Юридическое лицо'
            ) {
              str += `<ccdo:OrganizationId>${i.blockItem[z + 1].value[0]}</ccdo:OrganizationId>`;
            } else if (
              i.blockItem[z].name === 'Тип владельца' &&
              i.blockItem[z].value[0] === 'Физическое лицо'
            ) {
              str += `<ccdo:OwnerIndividualDetails><ccdo:IndividualId>${i.blockItem[z + 1].value[0]
                }</ccdo:IndividualId></ccdo:OwnerIndividualDetails>`;
            }
          }
          str += '</doc:SignersList></doc:OwnerDetails>';
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const getCountry = (): string => {
    let str = '';

    blockss.map((item) => {
      item.blocksItem.map((i) => {
        if (i.id === 41) {
          for (let z = 0; z < i.blockItem.length; z++) {
            if (i.blockItem[z].name === 'Страна происхождения' && i.blockItem[z].value[0] !== '') {
              str += `<csdo:UnifiedCountryCode codeListId="NSI_034">${country[i.blockItem[z].value[0]]
                }</csdo:UnifiedCountryCode>`;
            }
          }
        }
        return i;
      });
      return item;
    });

    return str;
  };

  const onclickSubmit = () => {
    let check = true;
    let a = document.createElement('a');
    let mnemonic = '';
    let maker = '';
    let ogrn = '';
    blockss.map((item) => {
      item.blocksItem.map((i) => {
        i.blockItem.map((ii) => {
          if (ii.id === 158) {
            mnemonic = ii.value[0];
          }
          if (ii.id === 159) {
            maker = ii.value[0];
          }
          if (ii.name === 'ОГРН') {
            ogrn = ii.value[0];
          }
          if (ii.name === 'Разные шины') {
            check = ii.value[0] === 'true';
            check = !check;
          }
          if ('numeric' in ii && ii.numeric === true) {
            ii.value[0] = ii.value[0].replace(/,/, '.');
          }
          return ii;
        });
        return i;
      });
      return item;
    });
    let data: string = `<soapenv:Envelope xsi:schemaLocation="urn://x-artefacts-epts-ru/ELPTSAddData/1.0.9 R019_VehicleEPassportDetails_v1.0.9.xsd" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ccdo="urn://x-artefacts-epts-ru/EEC_M_ComplexDataObjects/0.4.13" xmlns:csdo="urn://x-artefacts-epts-ru/EEC_M_SimpleDataObjects/0.4.7" xmlns:doc="urn://x-artefacts-epts-ru/ELPTSAddData/1.0.9" xmlns:pas="http://passport.integration.pts.fors.ru/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:trcdo="urn://x-artefacts-epts-ru/EEC_M_TR_ComplexDataObjects/1.0.11" xmlns:trsdo="urn://x-artefacts-epts-ru/EEC_M_TR_SimpleDataObjects/1.0.11" xmlns:urn1="urn://x-artefacts-epts-ru/EPTS_Services/1.0.1">
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
                        <urn1:SendingTimestamp>2019-03-20T17:50:28.525+03:00</urn1:SendingTimestamp>
                        <urn1:Recipient>
                            <urn1:Mnemonic>ELPTS</urn1:Mnemonic>
                            <urn1:HumanReadableName>ИС СИСТЕМЫ ЭЛЕКТРОННЫХ ПАСПОРТОВ</urn1:HumanReadableName>
                        </urn1:Recipient>
                    </urn1:MessageMetadata>
                    <urn1:SenderProvidedRequestData>
                        <urn1:ApplicationInfoContainers>
                            <urn1:ApplicationInfoContainer>
                                <urn1:ApplicationID>000</urn1:ApplicationID>
                                <urn1:ApplicationName>Создание электронного паспорта изготовителями и уполномоченными органами</urn1:ApplicationName>
                            </urn1:ApplicationInfoContainer>
                        </urn1:ApplicationInfoContainers>
                        <urn1:MessagePrimaryContent id="contentWithPersonalSignature">
                            <doc:VehicleEPassportDetails> 
                            <trsdo:VehicleEPassportKindCode>3</trsdo:VehicleEPassportKindCode>
							<trsdo:VehicleEPassportBaseCode>03</trsdo:VehicleEPassportBaseCode>`;

    data += getVehicleDetails();
    data += getTNVEDNumber();
    data += getDocumentDetails();
    data += getVehicleTypeDetails();
    data += getVariantDetails(check);
    data += getOwner();
    data += getCountry();

    data += `<csdo:BusinessEntityName>${maker}</csdo:BusinessEntityName>
        <csdo:BusinessEntityId kindId="1">${ogrn}</csdo:BusinessEntityId>
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
    <Context.Provider
      value={{
        handleMultiple,
        handleRadio,
        handleChange,
        handleChangeValue,
        onClickDelete,
        onClickAdd,
        onCkickAddDopBlock,
        uploadImage
      }}
    >
      <Box display='flex' marginTop={5} height='100%' justifyContent='center' alignItems='center'>
        <Blocks
          blocks={blockss}
          onChangeBlock={onChangeBlock}
          onclickSubmit={onclickSubmit}
        ></Blocks>
      </Box>
    </Context.Provider>
  );
};

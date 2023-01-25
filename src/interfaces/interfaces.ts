import { ReactNode } from 'react';

export type linkList = {
  page: string;
  text: string;
  id: number;
};

export interface ContextProps {
  handleChangeCheck?: (id: number, checked: boolean) => void;
  handleChangeValue?: (id: number, value: string | string[] | null) => void;
  handleRadio?: (id: number, value: string) => void;
  handleMultiple?: (id: number) => void;
  onClickDelete?: (id: number, group: number[] | undefined) => void;
  onClickAdd?: (id: number, group: number[] | undefined) => void;
  onClickAddDopBlock?: (id: number, groupBlock: number[] | undefined) => void;
  uploadImage?: (event: any, id: number) => void;
  deleteFile?: (file: string) => void
}

export interface IDict {
  [key: string]: string;
}

export interface ILinkList {
  linkList: linkList[];
}

export interface ILinkListItem {
  listItem: string;
  page: string;
  id: number;
}

export interface Props {
  children?: ReactNode;
}

export interface State {
  hasError: boolean;
}

export interface IBlocks {
  blocks: {
    blocksName: string;
    id: number;
    blocksItem: {
      blockName: string;
      checkbox?: boolean;
      check?: boolean;
      id: number;
      button?: boolean;
      buttonAdd?: boolean;
      buttonDelete?: boolean;
      blockItem: {
        name: string;
        type: string;
        id: number;
        require?: boolean;
        checkbox?: boolean;
        disabled: boolean;
        pattern?: string;
        options?: string[];
        button?: boolean;
        multiple?: boolean;
        value: string[];
        radio?: string[];
        checkboxText?: string;
        buttonDelete?: boolean;
        buttonAdd?: boolean;
        group?: number[];
        endAdornment?: string;
        label?: string;
        buttons?: boolean[];
        groupBlock?: number[];
        count?: number;
        files?: string[];
        groupBlockAdd?: number[];
        countBlock?: number;
        numeric?: boolean;
        freeSolo?: boolean;
        error?: boolean;
        defaultValue?: string;
        hidden?: boolean;
      }[];
    }[];
  }[];

  onChangeBlock: (id: number) => void;
  onclickSubmit: () => void;
}

export interface IBlock {
  blocksItem: {
    blockName: string;
    checkbox?: boolean;
    check?: boolean;
    id: number;
    button?: boolean;
    buttonAdd?: boolean;
    buttonDelete?: boolean;
    blockItem: {
      name: string;
      type: string;
      id: number;
      require?: boolean;
      checkbox?: boolean;
      disabled: boolean;
      value: string | string[] | null;
      radio?: string[];
      checkboxText?: string;
      multiple?: boolean;
      button?: boolean;
      buttonDelete?: boolean;
      buttonAdd?: boolean;
      group?: number[];
      checkboxGroup?: string[];
      options?: string[];
      endAdornment?: string;
      label?: string;
      buttons?: boolean[];
      groupBlock?: number[];
      count?: number;
      files?: string[];
      groupBlockAdd?: number[];
      countBlock?: number;
      pattern?: string;
      numeric?: boolean;
      freeSolo?: boolean;
      error?: boolean;
      defaultValue?: string;
      hidden?: boolean;
    }[];
  }[];
  onChangeBlock: (id: number) => void;
}

export interface IBlockItem {
  blockItem: {
    name: string;
    id: number;
    type: string;
    require?: boolean;
    checkbox?: boolean;
    disabled: boolean;
    multiple?: boolean;
    value: string | string[] | null;
    radio?: string[];
    checkboxText?: string;
    button?: boolean;
    buttonDelete?: boolean;
    buttonAdd?: boolean;
    group?: number[];
    buttonGroup?: boolean;
    checkboxGroup?: string[];
    options?: string[];
    endAdornment?: string;
    label?: string;
    buttons?: boolean[];
    groupBlock?: number[];
    count?: number;
    files?: string[];
    groupBlockAdd?: number[];
    countBlock?: number;
    buttonText?: string;
    pattern?: string;
    numeric?: boolean;
    freeSolo?: boolean;
    error?: boolean;
    defaultValue?: string;
    hidden?: boolean;
  }[];
}

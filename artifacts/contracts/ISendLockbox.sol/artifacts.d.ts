// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ISendLockbox$Type } from "./ISendLockbox";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ISendLockbox"]: ISendLockbox$Type;
    ["contracts/ISendLockbox.sol:ISendLockbox"]: ISendLockbox$Type;
  }

  interface ContractTypesMap {
    ["ISendLockbox"]: GetContractReturnType<ISendLockbox$Type["abi"]>;
    ["contracts/ISendLockbox.sol:ISendLockbox"]: GetContractReturnType<ISendLockbox$Type["abi"]>;
  }
}
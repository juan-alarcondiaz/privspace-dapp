interface privateInfoStorageContract {
  address: string;
  abi: object[];
}

export const privateInfoStorageContract: privateInfoStorageContract = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_kiiPrivateInfo",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "_whitelist",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "AddressAlreadyWhitelisted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "AddressNotWhitelisted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "WhitelistCapacityReached",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "AddedAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_kiiPrivateInfo",
          "type": "string"
        }
      ],
      "name": "KiiPrivateInfoUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "authenticate",
      "outputs": [
        {
          "internalType": "enum PrivateInfoStorage.Role",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getKiiPrivateInfo",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWhitelist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_kiiPrivateInfo",
          "type": "string"
        }
      ],
      "name": "setKiiPrivateInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
};

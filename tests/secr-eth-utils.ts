import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  DecryptionCalled,
  DecryptionReady,
  DecryptionReadyIncentivized,
  JoinNetworkRequest
} from "../generated/SecrETH/SecrETH"

export function createDecryptionCalledEvent(
  cipher: Bytes,
  shouldStoreDecryption: boolean
): DecryptionCalled {
  let decryptionCalledEvent = changetype<DecryptionCalled>(newMockEvent())

  decryptionCalledEvent.parameters = new Array()

  decryptionCalledEvent.parameters.push(
    new ethereum.EventParam("cipher", ethereum.Value.fromFixedBytes(cipher))
  )
  decryptionCalledEvent.parameters.push(
    new ethereum.EventParam(
      "shouldStoreDecryption",
      ethereum.Value.fromBoolean(shouldStoreDecryption)
    )
  )

  return decryptionCalledEvent
}

export function createDecryptionReadyEvent(cipher: Bytes): DecryptionReady {
  let decryptionReadyEvent = changetype<DecryptionReady>(newMockEvent())

  decryptionReadyEvent.parameters = new Array()

  decryptionReadyEvent.parameters.push(
    new ethereum.EventParam("cipher", ethereum.Value.fromFixedBytes(cipher))
  )

  return decryptionReadyEvent
}

export function createDecryptionReadyIncentivizedEvent(
  cipher: Bytes,
  storageFee: BigInt
): DecryptionReadyIncentivized {
  let decryptionReadyIncentivizedEvent = changetype<
    DecryptionReadyIncentivized
  >(newMockEvent())

  decryptionReadyIncentivizedEvent.parameters = new Array()

  decryptionReadyIncentivizedEvent.parameters.push(
    new ethereum.EventParam("cipher", ethereum.Value.fromFixedBytes(cipher))
  )
  decryptionReadyIncentivizedEvent.parameters.push(
    new ethereum.EventParam(
      "storageFee",
      ethereum.Value.fromUnsignedBigInt(storageFee)
    )
  )

  return decryptionReadyIncentivizedEvent
}

export function createJoinNetworkRequestEvent(
  newSignerPubKey: Bytes
): JoinNetworkRequest {
  let joinNetworkRequestEvent = changetype<JoinNetworkRequest>(newMockEvent())

  joinNetworkRequestEvent.parameters = new Array()

  joinNetworkRequestEvent.parameters.push(
    new ethereum.EventParam(
      "newSignerPubKey",
      ethereum.Value.fromFixedBytes(newSignerPubKey)
    )
  )

  return joinNetworkRequestEvent
}

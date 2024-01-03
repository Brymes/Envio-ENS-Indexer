/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  NameWrapperContract_ExpiryExtended_handler,
  NameWrapperContract_ExpiryExtended_loader,
  NameWrapperContract_FusesSet_handler,
  NameWrapperContract_FusesSet_loader,
  NameWrapperContract_NameUnwrapped_handler,
  NameWrapperContract_NameUnwrapped_loader,
  NameWrapperContract_NameWrapped_handler,
  NameWrapperContract_NameWrapped_loader,
  NameWrapperContract_OwnershipTransferred_handler,
  NameWrapperContract_OwnershipTransferred_loader,
  NameWrapperContract_TransferBatch_handler,
  NameWrapperContract_TransferBatch_loader,
  NameWrapperContract_TransferSingle_handler,
  NameWrapperContract_TransferSingle_loader,
} from "../generated/src/Handlers.gen";

import {
  ApprovalEntity,
  ControllerChangedEntity,
  ExpiryExtendedEntity,
  FusesSetEntity,
  NameUnwrappedEntity,
  NameWrappedEntity,
  NameWrapperEventsSummaryEntity,
  NWApprovalForAllEntity,
  OwnershipTransferredEntity,
  TransferBatchEntity,
  TransferSingleEntity,
  URIEntity
} from "./src/Types.gen";

const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: NameWrapperEventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  approvalsCount: BigInt(0),
  approvalForAllsCount: BigInt(0),
  controllerChangedsCount: BigInt(0),
  expiryExtendedsCount: BigInt(0),
  fusesSetsCount: BigInt(0),
  nameUnwrappedsCount: BigInt(0),
  nameWrappedsCount: BigInt(0),
  ownershipTransferredsCount: BigInt(0),
  transferBatchsCount: BigInt(0),
  transferSinglesCount: BigInt(0),
  uRIsCount: BigInt(0)
};


NameWrapperContract_ExpiryExtended_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_ExpiryExtended_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);


  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    expiryExtendedsCount: currentSummaryEntity.expiryExtendedsCount + BigInt(1)
  };

  let expiryExtendedEntity: ExpiryExtendedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    node: event.params.node,
    expiry: event.params.expiry,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.ExpiryExtended.set(expiryExtendedEntity);
});

NameWrapperContract_FusesSet_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_FusesSet_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    fusesSetsCount: currentSummaryEntity.fusesSetsCount + BigInt(1)
  };

  let fusesSetEntity: FusesSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    node: event.params.node,
    fuses: event.params.fuses,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.FusesSet.set(fusesSetEntity);
});

NameWrapperContract_NameUnwrapped_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_NameUnwrapped_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    nameUnwrappedsCount: currentSummaryEntity.nameUnwrappedsCount + BigInt(1)
  };

  let nameUnwrappedEntity: NameUnwrappedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    node: event.params.node,
    owner: event.params.owner,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.NameUnwrapped.set(nameUnwrappedEntity);
});

NameWrapperContract_NameWrapped_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_NameWrapped_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);


  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    nameWrappedsCount: currentSummaryEntity.nameWrappedsCount + BigInt(1)
  };

  let nameWrappedEntity: NameWrappedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    node: event.params.node,
    name: event.params.name,
    owner: event.params.owner,
    fuses: event.params.fuses,
    expiry: event.params.expiry,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.NameWrapped.set(nameWrappedEntity);
});

NameWrapperContract_OwnershipTransferred_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_OwnershipTransferred_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    ownershipTransferredsCount:
      currentSummaryEntity.ownershipTransferredsCount + BigInt(1)
  };

  let ownershipTransferredEntity: OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.OwnershipTransferred.set(ownershipTransferredEntity);
});

NameWrapperContract_TransferBatch_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_TransferBatch_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    transferBatchsCount: currentSummaryEntity.transferBatchsCount + BigInt(1)
  };

  let transferBatchEntity: TransferBatchEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    ids: event.params.ids,
    values: event.params.values,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.TransferBatch.set(transferBatchEntity);
});

NameWrapperContract_TransferSingle_loader(({ event, context }) => {
  context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_TransferSingle_handler(({ event, context }) => {
  let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  let currentSummaryEntity: NameWrapperEventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  let nextSummaryEntity = {
    ...currentSummaryEntity,
    transferSinglesCount: currentSummaryEntity.transferSinglesCount + BigInt(1)
  };

  let transferSingleEntity: TransferSingleEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    operator: event.params.operator,
    from: event.params.from,
    to: event.params.to,
    eventId: event.params.id,
    value: event.params.value,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY
  };

  context.NameWrapperEventsSummary.set(nextSummaryEntity);
  context.TransferSingle.set(transferSingleEntity);
});
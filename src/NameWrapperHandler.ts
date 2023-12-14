/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
    NameWrapperContract_Approval_handler,
    NameWrapperContract_Approval_loader,
    NameWrapperContract_ApprovalForAll_handler,
    NameWrapperContract_ApprovalForAll_loader,
    NameWrapperContract_ControllerChanged_handler,
    NameWrapperContract_ControllerChanged_loader,
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
    NameWrapperContract_URI_handler,
    NameWrapperContract_URI_loader,
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
    uRIsCount: BigInt(0),
};

NameWrapperContract_Approval_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_Approval_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        approvalsCount: currentSummaryEntity.approvalsCount + BigInt(1),
    };

    let approvalEntity: ApprovalEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        owner: event.params.owner,
        approved: event.params.approved,
        tokenId: event.params.tokenId,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.Approval.set(approvalEntity);
});

NameWrapperContract_ApprovalForAll_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_ApprovalForAll_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        approvalForAllsCount: currentSummaryEntity.approvalForAllsCount + BigInt(1),
    };

    let approvalForAllEntity: NWApprovalForAllEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        account: event.params.account,
        operator: event.params.operator,
        approved: event.params.approved,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.NWApprovalForAll.set(approvalForAllEntity);
});

NameWrapperContract_ControllerChanged_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_ControllerChanged_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        controllerChangedsCount: currentSummaryEntity.controllerChangedsCount + BigInt(1),
    };

    let controllerChangedEntity: ControllerChangedEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        controller: event.params.controller,
        active: event.params.active,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.ControllerChanged.set(controllerChangedEntity);
});

NameWrapperContract_ExpiryExtended_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_ExpiryExtended_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        expiryExtendedsCount: currentSummaryEntity.expiryExtendedsCount + BigInt(1),
    };

    let expiryExtendedEntity: ExpiryExtendedEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        node: event.params.node,
        expiry: event.params.expiry,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.ExpiryExtended.set(expiryExtendedEntity);
});

NameWrapperContract_FusesSet_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_FusesSet_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        fusesSetsCount: currentSummaryEntity.fusesSetsCount + BigInt(1),
    };

    let fusesSetEntity: FusesSetEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        node: event.params.node,
        fuses: event.params.fuses,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.FusesSet.set(fusesSetEntity);
});

NameWrapperContract_NameUnwrapped_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_NameUnwrapped_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        nameUnwrappedsCount: currentSummaryEntity.nameUnwrappedsCount + BigInt(1),
    };

    let nameUnwrappedEntity: NameUnwrappedEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        node: event.params.node,
        owner: event.params.owner,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.NameUnwrapped.set(nameUnwrappedEntity);
});

NameWrapperContract_NameWrapped_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_NameWrapped_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        nameWrappedsCount: currentSummaryEntity.nameWrappedsCount + BigInt(1),
    };

    let nameWrappedEntity: NameWrappedEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        node: event.params.node,
        name: event.params.name,
        owner: event.params.owner,
        fuses: event.params.fuses,
        expiry: event.params.expiry,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.NameWrapped.set(nameWrappedEntity);
});

NameWrapperContract_OwnershipTransferred_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_OwnershipTransferred_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        ownershipTransferredsCount: currentSummaryEntity.ownershipTransferredsCount + BigInt(1),
    };

    let ownershipTransferredEntity: OwnershipTransferredEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        previousOwner: event.params.previousOwner,
        newOwner: event.params.newOwner,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.OwnershipTransferred.set(ownershipTransferredEntity);
});

NameWrapperContract_TransferBatch_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_TransferBatch_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        transferBatchsCount: currentSummaryEntity.transferBatchsCount + BigInt(1),
    };

    let transferBatchEntity: TransferBatchEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        operator: event.params.operator,
        from: event.params.from,
        to: event.params.to,
        ids: event.params.ids,
        values: event.params.values,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.TransferBatch.set(transferBatchEntity);
});

NameWrapperContract_TransferSingle_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_TransferSingle_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        transferSinglesCount: currentSummaryEntity.transferSinglesCount + BigInt(1),
    };

    let transferSingleEntity: TransferSingleEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        operator: event.params.operator,
        from: event.params.from,
        to: event.params.to,
        eventId: event.params.id,
        value: event.params.value,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.TransferSingle.set(transferSingleEntity);
});

NameWrapperContract_URI_loader(({event, context}) => {
    context.NameWrapperEventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

NameWrapperContract_URI_handler(({event, context}) => {
    let summary = context.NameWrapperEventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

    let currentSummaryEntity: NameWrapperEventsSummaryEntity =
        summary ?? INITIAL_EVENTS_SUMMARY;

    let nextSummaryEntity = {
        ...currentSummaryEntity,
        uRIsCount: currentSummaryEntity.uRIsCount + BigInt(1),
    };

    let uRIEntity: URIEntity = {
        id: event.transactionHash + event.logIndex.toString(),
        value: event.params.value,
        eventId: event.params.id,
        eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
    };

    context.NameWrapperEventsSummary.set(nextSummaryEntity);
    context.URI.set(uRIEntity);
});

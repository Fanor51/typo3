<?php

// Fields of record types to be included in the export
return [
    'pages' => [
        'title',
        'deleted',
        'doktype',
        'hidden',
        'perms_everybody',
    ],
    'tt_content' => [
        'CType',
        'header',
        'deleted',
        'hidden',
        't3ver_oid',
        'tx_testirreforeignfield_hotels',
        'tx_testirrecsv_hotels',
    ],
    'tx_testirrecsv_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'offers',
    ],
    'tx_testirrecsv_offer' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'prices',
    ],
    'tx_testirrecsv_price' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'price',
    ],
    'tx_testirreforeignfield_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'parentid',
        'parenttable',
        'parentidentifier',
        'title',
        'offers',
    ],
    'tx_testirreforeignfield_offer' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'parentid',
        'parenttable',
        'parentidentifier',
        'title',
        'prices',
    ],
    'tx_testirreforeignfield_price' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'parentid',
        'parenttable',
        'parentidentifier',
        'title',
        'price',
    ],
    'tx_testirremnattributeinline_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'offers',
    ],
    'tx_testirremnattributeinline_hotel_offer_rel' => [
        'sys_language_uid',
        'l18n_parent',
        'deleted',
        'hidden',
        'hotelid',
        'offerid',
        'hotelsort',
        'offersort',
        'prices',
    ],
    'tx_testirremnattributeinline_offer' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'hotels',
    ],
    'tx_testirremnattributeinline_price' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'parentid',
        'title',
        'price',
    ],
    'tx_testirremnattributesimple_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'offers',
    ],
    'tx_testirremnattributesimple_hotel_offer_rel' => [
        'sys_language_uid',
        'l18n_parent',
        'deleted',
        'hidden',
        'hotelid',
        'offerid',
        'hotelsort',
        'offersort',
        'quality',
        'allincl',
    ],
    'tx_testirremnattributesimple_offer' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'hotels',
    ],
    'tx_testirremm_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'offers',
    ],
    'tx_testirremm_offer' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'hotels',
        'prices',
    ],
    'tx_testirremm_price' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'price',
        'offers',
    ],
    'tx_testirremnsymmetric_hotel' => [
        'sys_language_uid',
        'l18n_parent',
        'sorting',
        'deleted',
        'hidden',
        'title',
        'branches',
    ],
    'tx_testirremnsymmetric_hotel_rel' => [
        'sys_language_uid',
        'l18n_parent',
        'deleted',
        'hidden',
        'hotelid',
        'branchid',
        'hotelsort',
        'branchsort',
    ],
];

{
    "device_sn":"00000000-0000-0000-0000-ac1f6bed8408",//
    "device_id":"00000000-0000-0000-0000-ac1f6bed8408",// 设备id
    "access_key":"",
    "records":[
        {
            "id":"50b17912-8f33-4e57-954a-9c3111113ff3",
            "task_id":"b79a40d4-b990-445c-945a-90b679fb2a75",// 任务id
            "task_name":"周界闯入8",// 任务名称
            "sub_task_id":405,// 子任务id
            "process_id":"12021091019242573626",
            "pic_url":"algo_panoramic/20210911-51d1cd02-000242ac13000a-197f7088-0005f498",
            "small_pic_url":"algo_cropalarm_objectped/20210911-aa8f8036-000242ac13000a-1793b528-00003b70",
            "data_type":2,// 数据类型，1：抓拍 2：告警
            "capture_at":1631355939,// 捕获时间
            "app_name":"com.sensetime.algo.boundary.breakin",// applet算法版本
            "app_version":"1.0.0",
            "task_type":"ST_BOUNDARY_BREAKIN",// 任务类型
            "task_type_name":"boundary breakin",
            "sub_device_id":"7ceea9d75dc84d4c84287e5f91b57795",// 子设备id
            "sub_device_name":"t_停车场行人闯入_7ceea9d75dc84d4c84287e5f91b57795_02",// 子设备名称
            "confidence":0.5795286893844604,// 置信度
            "track_id":38595, // 追踪id
            "rectangle":{   // 框图 矩形， （left, top）代表左上顶点
                "left":1293,
                "top":316,
                "width":125,
                "height":208
            },
            "property":{// 属性
                "st_tricycle_type":[
                    {
                        "category":"st_hopper",// 属性名
                        "confidence":0.9722703695297241, // 置信度
                        "name":""
                    },
                    {
                        "category":"st_trunk",
                        "confidence":0.027514878660440445,
                        "name":""
                    }
                ],
                "st_vehicle_class":[
                    {
                        "category":"st_bicycle",
                        "confidence":0.9732689261436462,
                        "name":"自行车"
                    },
                    {
                        "category":"st_ebike",
                        "confidence":0.02388121373951435,
                        "name":"电动车"
                    }
                ],
                "vehicle_color":[
                    {
                        "category":"red",
                        "confidence":0.5685985684394836,
                        "name":"红"
                    },
                    {
                        "category":"white",
                        "confidence":0.21473731100559235,
                        "name":"白"
                    }
                ]
            },
            "trajectories":null,// 高空抛物轨迹坐标
            "target_type":"human_powered_vehicle",
            "target_type_name":"非机动车",
            "extra_info":{
                "roi":[  // 任务目标检测框
                    {
                        "direction":"string",
                        "name":"string",
                        "points":[
                            {
                                "x":0,
                                "y":0
                            },
                            {
                                "x":0.99,
                                "y":0
                            },
                            {
                                "x":0.99,
                                "y":0.99
                            },
                            {
                                "x":0,
                                "y":0.99
                            }
                        ]
                    }
                ]
            },
            "created_at":1631355941, // 创建时间
            "updated_at":1631355941  // 更新时间
        }
    ]
}
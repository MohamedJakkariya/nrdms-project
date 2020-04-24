var wms_layers = [];

var format_High_0 = new ol.format.GeoJSON();
var features_High_0 = format_High_0.readFeatures(json_High_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_High_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_High_0.addFeatures(features_High_0);
var lyr_High_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_High_0, 
                style: style_High_0,
                interactive: true,
                title: '<img src="styles/legend/High_0.png" /> High'
            });
var format_Medium_1 = new ol.format.GeoJSON();
var features_Medium_1 = format_Medium_1.readFeatures(json_Medium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medium_1.addFeatures(features_Medium_1);
var lyr_Medium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medium_1, 
                style: style_Medium_1,
                interactive: true,
                title: '<img src="styles/legend/Medium_1.png" /> Medium'
            });
var format_Low_2 = new ol.format.GeoJSON();
var features_Low_2 = format_Low_2.readFeatures(json_Low_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Low_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Low_2.addFeatures(features_Low_2);
var lyr_Low_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Low_2, 
                style: style_Low_2,
                interactive: true,
                title: '<img src="styles/legend/Low_2.png" /> Low'
            });
var format_311_locations_3 = new ol.format.GeoJSON();
var features_311_locations_3 = format_311_locations_3.readFeatures(json_311_locations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_311_locations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_311_locations_3.addFeatures(features_311_locations_3);
var lyr_311_locations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_311_locations_3, 
                style: style_311_locations_3,
                interactive: true,
                title: '<img src="styles/legend/311_locations_3.png" /> 311_locations'
            });

lyr_High_0.setVisible(true);lyr_Medium_1.setVisible(true);lyr_Low_2.setVisible(true);lyr_311_locations_3.setVisible(true);
var layersList = [lyr_High_0,lyr_Medium_1,lyr_Low_2,lyr_311_locations_3];
lyr_High_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Medium_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Low_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_311_locations_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'F1': 'F1', 'Place': 'Place', 'Lat': 'Lat', 'Lon': 'Lon', 'Nitragen': 'Nitragen', 'Phosphorus': 'Phosphorus', 'Potasium': 'Potasium', 'pH': 'pH', 'EC': 'EC', 'OC': 'OC', 'Sulphur': 'Sulphur', 'Zinc': 'Zinc', 'Copper': 'Copper', 'Manganese': 'Manganese', 'Boron': 'Boron', 'Iron': 'Iron', });
lyr_High_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Medium_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Low_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_311_locations_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'F1': 'TextEdit', 'Place': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Nitragen': 'TextEdit', 'Phosphorus': 'TextEdit', 'Potasium': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'OC': 'TextEdit', 'Sulphur': 'TextEdit', 'Zinc': 'TextEdit', 'Copper': 'TextEdit', 'Manganese': 'TextEdit', 'Boron': 'TextEdit', 'Iron': 'TextEdit', });
lyr_High_0.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Medium_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Low_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_311_locations_3.set('fieldLabels', {'OBJECTID': 'no label', 'F1': 'no label', 'Place': 'header label', 'Lat': 'no label', 'Lon': 'no label', 'Nitragen': 'header label', 'Phosphorus': 'header label', 'Potasium': 'header label', 'pH': 'header label', 'EC': 'header label', 'OC': 'header label', 'Sulphur': 'header label', 'Zinc': 'header label', 'Copper': 'header label', 'Manganese': 'header label', 'Boron': 'header label', 'Iron': 'header label', });
lyr_311_locations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
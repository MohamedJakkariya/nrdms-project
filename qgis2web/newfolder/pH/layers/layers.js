var wms_layers = [];

var format_pHHigh_0 = new ol.format.GeoJSON();
var features_pHHigh_0 = format_pHHigh_0.readFeatures(json_pHHigh_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pHHigh_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pHHigh_0.addFeatures(features_pHHigh_0);
var lyr_pHHigh_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pHHigh_0, 
                style: style_pHHigh_0,
                interactive: true,
                title: '<img src="styles/legend/pHHigh_0.png" /> pH High'
            });
var format_pHMedium_1 = new ol.format.GeoJSON();
var features_pHMedium_1 = format_pHMedium_1.readFeatures(json_pHMedium_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pHMedium_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pHMedium_1.addFeatures(features_pHMedium_1);
var lyr_pHMedium_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pHMedium_1, 
                style: style_pHMedium_1,
                interactive: true,
                title: '<img src="styles/legend/pHMedium_1.png" /> pH Medium'
            });
var format_pHLow_2 = new ol.format.GeoJSON();
var features_pHLow_2 = format_pHLow_2.readFeatures(json_pHLow_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pHLow_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pHLow_2.addFeatures(features_pHLow_2);
var lyr_pHLow_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pHLow_2, 
                style: style_pHLow_2,
                interactive: true,
                title: '<img src="styles/legend/pHLow_2.png" /> pH Low'
            });
var format_pH_3 = new ol.format.GeoJSON();
var features_pH_3 = format_pH_3.readFeatures(json_pH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_3.addFeatures(features_pH_3);cluster_pH_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_pH_3
});
var lyr_pH_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_pH_3, 
                style: style_pH_3,
                interactive: true,
                title: '<img src="styles/legend/pH_3.png" /> pH '
            });

lyr_pHHigh_0.setVisible(true);lyr_pHMedium_1.setVisible(true);lyr_pHLow_2.setVisible(true);lyr_pH_3.setVisible(true);
var layersList = [lyr_pHHigh_0,lyr_pHMedium_1,lyr_pHLow_2,lyr_pH_3];
lyr_pHHigh_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_pHMedium_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_pHLow_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_pH_3.set('fieldAliases', {'F1': 'F1', 'Place': 'Place', 'Lat': 'Lat', 'Lon': 'Lon', 'Nitragen': 'Nitragen', 'Phosphorus': 'Phosphorus', 'Potasium': 'Potasium', 'pH': 'pH', 'EC': 'EC', 'OC': 'OC', 'Sulphur': 'Sulphur', 'Zinc': 'Zinc', 'Copper': 'Copper', 'Manganese': 'Manganese', 'Boron': 'Boron', 'Iron': 'Iron', });
lyr_pHHigh_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_pHMedium_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_pHLow_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_pH_3.set('fieldImages', {'F1': 'TextEdit', 'Place': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Nitragen': 'TextEdit', 'Phosphorus': 'TextEdit', 'Potasium': 'TextEdit', 'pH': 'TextEdit', 'EC': 'TextEdit', 'OC': 'TextEdit', 'Sulphur': 'TextEdit', 'Zinc': 'TextEdit', 'Copper': 'TextEdit', 'Manganese': 'TextEdit', 'Boron': 'TextEdit', 'Iron': 'TextEdit', });
lyr_pHHigh_0.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_pHMedium_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_pHLow_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_pH_3.set('fieldLabels', {'F1': 'no label', 'Place': 'header label', 'Lat': 'no label', 'Lon': 'no label', 'Nitragen': 'header label', 'Phosphorus': 'header label', 'Potasium': 'header label', 'pH': 'header label', 'EC': 'header label', 'OC': 'header label', 'Sulphur': 'header label', 'Zinc': 'header label', 'Copper': 'header label', 'Manganese': 'header label', 'Boron': 'header label', 'Iron': 'no label', });
lyr_pH_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Chalco_1 = new ol.format.GeoJSON();
var features_Chalco_1 = format_Chalco_1.readFeatures(json_Chalco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chalco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chalco_1.addFeatures(features_Chalco_1);
var lyr_Chalco_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chalco_1, 
                style: style_Chalco_1,
                popuplayertitle: 'Chalco',
                interactive: false,
                title: '<img src="styles/legend/Chalco_1.png" /> Chalco'
            });
var format_colonias_2 = new ol.format.GeoJSON();
var features_colonias_2 = format_colonias_2.readFeatures(json_colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_2.addFeatures(features_colonias_2);
var lyr_colonias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_2, 
                style: style_colonias_2,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_2.png" /> colonias'
            });
var format_puntos_3 = new ol.format.GeoJSON();
var features_puntos_3 = format_puntos_3.readFeatures(json_puntos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_3.addFeatures(features_puntos_3);
var lyr_puntos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntos_3, 
                style: style_puntos_3,
                popuplayertitle: 'puntos',
                interactive: true,
    title: 'puntos<br />\
    <img src="styles/legend/puntos_3_0.png" /> Falta de agua<br />\
    <img src="styles/legend/puntos_3_1.png" /> Fuga<br />\
    <img src="styles/legend/puntos_3_2.png" /> Inundacion<br />'
        });

lyr_Positron_0.setVisible(true);lyr_Chalco_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_puntos_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Chalco_1,lyr_colonias_2,lyr_puntos_3];
lyr_Chalco_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'PobTotal': 'PobTotal', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', 'area_m': 'area_m', });
lyr_puntos_3.set('fieldAliases', {'No': 'No', 'Id': 'Id', 'COOR_X': 'COOR_X', 'COOR_Y': 'COOR_Y', 'FECHA': 'FECHA', 'layer': 'layer', 'Tipo de pr': 'Tipo de pr', });
lyr_Chalco_1.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'PobTotal': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', 'area_m': 'TextEdit', });
lyr_puntos_3.set('fieldImages', {'No': 'TextEdit', 'Id': 'TextEdit', 'COOR_X': 'TextEdit', 'COOR_Y': 'TextEdit', 'FECHA': 'DateTime', 'layer': 'TextEdit', 'Tipo de pr': 'TextEdit', });
lyr_Chalco_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'PobTotal': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'inline label - always visible', 'area_m': 'hidden field', });
lyr_puntos_3.set('fieldLabels', {'No': 'hidden field', 'Id': 'hidden field', 'COOR_X': 'hidden field', 'COOR_Y': 'hidden field', 'FECHA': 'hidden field', 'layer': 'hidden field', 'Tipo de pr': 'inline label - always visible', });
lyr_puntos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
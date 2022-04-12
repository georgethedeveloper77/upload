<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
                version="1.0"
                exclude-result-prefixes="s">
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <title>XML Sitemap (for Feature Phones)</title>
                <script type="text/javascript" src="https://cdn.damianoff.com/repo/jquery/jquery-1.4.2.min.js"></script>
                <script type="text/javascript"
                        src="https://cdn.damianoff.com/repo/jquery.tablesorter/2.0.5/jquery.tablesorter.min.js"></script>
                <script type="text/javascript"><![CDATA[
$(document).ready(function() {
$("#sitemap").tablesorter({sortList:[[0,1]],widgets:['zebra']});
$('.url').on('click', function(){
  window.open($(this).html());
  return false;
});
});]]></script>
                <style type="text/css">
                    body
                    {
                    font-family: Helvetica, Arial, sans-serif;
                    font-size: 13px;
                    color: #545353;
                    }
                    table
                    {
                    border: none;
                    border-collapse: collapse;
                    width:100%;
                    margin:30px 0;
                    }
                    #sitemap tr.odd
                    {
                    background-color: #eee;
                    }
                    #sitemap tbody tr:hover
                    {
                    background-color: #ccc;
                    }
                    #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a
                    {
                    color: #000;
                    }
                    #content
                    {
                    margin: 10px auto;
                    max-width: 960px;
                    }
                    .expl
                    {
                    margin: 10px 3px;
                    line-height: 1.3em;
                    }
                    .expl a, .expl a:visited, footer a, footer a:visited
                    {
                    color: #da3114;
                    font-weight: bold;
                    }
                    a
                    {
                    color: #000;
                    text-decoration: none;
                    }
                    a:visited
                    {
                    color: #777;
                    }
                    a:hover
                    {
                    text-decoration: underline;
                    }
                    td
                    {
                    font-size:11px;
                    }
                    th
                    {
                    text-align:left;
                    padding: 5px 20px 5px 5px;
                    font-size: 12px;
                    }
                    thead th
                    {
                    border-bottom: 1px solid #dedede;
                    cursor: pointer;
                    }
                    footer
                    {
                    margin:20px auto;
                    text-align:left;
                    max-width:100%;
                    }
                    .url:hover
                    {
                    cursor:pointer;
                    }
                </style>
            </head>
            <body>
                <div id="content">
                    <h2>XML Sitemap (for Feature Phones)</h2>
                    <p class="expl">This is styled xml sitemap (for feature phones).</p>
                    <p class="expl">This sitemap contains
                        <xsl:value-of select="count(s:urlset/s:url)"/> URLs.
                    </p>
                    <table id="sitemap" class="tablesorter" border="1" cellpadding="3">
                        <thead>
                            <tr bgcolor="#9acd32">
                                <th style="text-align:left">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="s:urlset/s:url">
                                <tr>
                                    <td class="url">
                                        <xsl:value-of select="s:loc"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                    <footer></footer>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

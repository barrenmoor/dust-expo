(function(){dust.register("booklist",body_0);function body_0(chk,ctx){return chk.write("<div id=\"booksDiv\"><table border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr><th>&nbsp;</th><th>Name</th><th>Author</th><th>Conditional</th></tr>").section(ctx._get(false, ["values"]),ctx,{"block":body_1},null).write("</table></div><div id=\"booksControls\"><table border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td>&nbsp;</td></tr><tr><td><input type=\"button\" onclick=\"createBook()\" value=\"Create\"/><input type=\"button\" onclick=\"editBook()\" value=\"Edit\"/><input type=\"button\" onclick=\"deleteBook()\" value=\"Delete\"/></td></tr></table></div>");}function body_1(chk,ctx){return chk.write("<tr id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"><td><input type=\"radio\" id=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\" name=\"selectbook\" value=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"/></td><td>").reference(ctx._get(false, ["name"]),ctx,"h").write("</td><td>").reference(ctx._get(false, ["author"]),ctx,"h").write("</td><td>").helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_4}).write("</td></tr>");}function body_2(chk,ctx){return chk.write("&nbsp;");}function body_3(chk,ctx){return chk.write("Hemingway Book");}function body_4(chk,ctx){return chk.write("'").reference(ctx._get(false, ["name"]),ctx,"h").write("' == 'A Farewell to Arms'");}return body_0;})();
(function(){dust.register("addedit",body_0);function body_0(chk,ctx){return chk.write("<form name=\"addedit\" id=\"addedit\"><input type=\"hidden\" name=\"id\" id=\"id\" value=\"").reference(ctx._get(false, ["id"]),ctx,"h").write("\"/><table border=\"0\" cellpadding=\"2\" cellspacing=\"0\" width=\"300px\"><tr><td width=\"30%\"><label for=\"name\">Name</label></td><td width=\"70%\"><input type=\"text\" name=\"name\" id=\"name\" value=\"").reference(ctx._get(false, ["name"]),ctx,"h").write("\"/></td></tr><tr><td width=\"30%\"><label for=\"author\">Author</label></td><td width=\"70%\"><input type=\"text\" name=\"author\" id=\"author\" value=\"").reference(ctx._get(false, ["author"]),ctx,"h").write("\"/></td></tr><tr><td colspan=\"2\">&nbsp;</td></tr><tr><td colspan=\"2\"><input type=\"button\" onclick=\"saveBook()\" value=\"Save\"/><input type=\"button\" onclick=\"cancel()\" value=\"Cancel\"/></td></tr></form>");}return body_0;})();

import af from "./af.svg"
import ai from "./ai.svg"
import al from "./al.svg"
import am from "./am.svg"
import ao from "./ao.svg"
import ar from "./ar.svg"
import at from "./at.svg"
import au from "./au.svg"
import bd from "./bd.svg"
import be from "./be.svg"
import bf from "./bf.svg"
import bg from "./bg.svg"
import bi from "./bi.svg"
import bj from "./bj.svg"
import bo from "./bo.svg"
import br from "./br.svg"
import bw from "./bw.svg"
import by from "./by.svg"
import ca from "./ca.svg"
import cd from "./cd.svg"
import cf from "./cf.svg"
import cg from "./cg.svg"
import ch from "./ch.svg"
import ci from "./ci.svg"
import cm from "./cm.svg"
import cn from "./cn.svg"
import co from "./co.svg"
import cr from "./cr.svg"
import cz from "./cz.svg"
import de from "./de.svg"
import dk from "./dk.svg"
import dz from "./dz.svg"
import ee from "./ee.svg"
import eg from "./eg.svg"
import er from "./er.svg"
import es from "./es.svg"
import et from "./et.svg"
import fi from "./fi.svg"
import fj from "./fj.svg"
import fm from "./fm.svg"
import fr from "./fr.svg"
import ga from "./ga.svg"
import gb from "./gb.svg"
import ge from "./ge.svg"
import gf from "./gf.svg"
import gh from "./gh.svg"
import gn from "./gn.svg"
import gr from "./gr.svg"
import gt from "./gt.svg"
import gu from "./gu.svg"
import gw from "./gw.svg"
import hn from "./hn.svg"
import hr from "./hr.svg"
import hu from "./hu.svg"
import id from "./id.svg"
import ins from "./in.svg"
import iq from "./iq.svg"
import ir from "./ir.svg"
import is from "./is.svg"
import it from "./it.svg"
import jp from "./jp.svg"
import ke from "./ke.svg"
import kh from "./kh.svg"
import kp from "./kp.svg"
import kr from "./kr.svg"
import kz from "./kz.svg"
import lr from "./lr.svg"
import ma from "./ma.svg"
import md from "./md.svg"
import mk from "./mk.svg"
import ml from "./ml.svg"
import mm from "./mm.svg"
import mn from "./mn.svg"
import mw from "./mw.svg"
import mx from "./mx.svg"
import mz from "./mz.svg"
import na from "./na.svg"
import nc from "./nc.svg"
import ne from "./ne.svg"
import ng from "./ng.svg"
import nl from "./nl.svg"
import no from "./no.svg"
import np from "./np.svg"
import nz from "./nz.svg"
import pe from "./pe.svg"
import pf from "./pf.svg"
import pg from "./pg.svg"
import ph from "./ph.svg"
import pk from "./pk.svg"
import pl from "./pl.svg"
import pr from "./pr.svg"
import pt from "./pt.svg"
import ro from "./ro.svg"
import rs from "./rs.svg"
import ru from "./ru.svg"
import rw from "./rw.svg"
import sa from "./sa.svg"
import sb from "./sb.svg"
import sd from "./sd.svg"
import se from "./se.svg"
import si from "./si.svg"
import sk from "./sk.svg"
import sl from "./sl.svg"
import sn from "./sn.svg"
import so from "./so.svg"
import ss from "./ss.svg"
import td from "./td.svg"
import tj from "./tj.svg"
import tl from "./tl.svg"
import tm from "./tm.svg"
import tr from "./tr.svg"
import tw from "./tw.svg"
import tz from "./tz.svg"
import ua from "./ua.svg"
import ug from "./ug.svg"
import us from "./us.svg"
import uz from "./uz.svg"
import ve from "./ve.svg"
import vn from "./vn.svg"
import vu from "./vu.svg"
import ye from "./ye.svg"
import za from "./za.svg"
import zm from "./zm.svg"

type flag = {
    [index: string]: string;
    af:string,  
    ai:string,
    al:string,
    am:string,
    ao:string,
    ar:string,
    at:string,
    au:string,
    bd:string,
    be:string,
    bf:string,
    bg:string,
    bi:string,
    bj:string,
    bo:string,
    br:string,
    bw:string,
    by:string,
    ca:string,
    cd:string,
    cf:string,
    cg:string,
    ch:string,
    ci:string,
    cm:string,
    cn:string,
    co:string,
    cr:string,
    cz:string,
    de:string,
    dk:string,
    dz:string,
    ee:string,
    eg:string,
    er:string,
    es:string,
    et:string,
    fi:string,
    fj:string,
    fm:string,
    fr:string,
    ga:string,
    gb:string,
    ge:string,
    gf:string,
    gh:string,
    gn:string,
    gr:string,
    gt:string,
    gu:string,
    gw:string,
    hn:string,
    hr:string,
    hu:string,
    id:string,
    ins:string,
    iq:string,
    ir:string,
    is:string,
    it:string,
    jp:string,
    ke:string,
    kh:string,
    kp:string,
    kr:string,
    kz:string,
    lr:string,
    ma:string,
    md:string,
    mk:string,
    ml:string,
    mm:string,
    mn:string,
    mw:string,
    mx:string,
    mz:string,
    na:string,
    nc:string,
    ne:string,
    ng:string,
    nl:string,
    no:string,
    np:string,
    nz:string,
    pe:string,
    pf:string,
    pg:string,
    ph:string,
    pk:string,
    pl:string,
    pr:string,
    pt:string,
    ro:string,
    rs:string,
    ru:string,
    rw:string,
    sa:string,
    sb:string,
    sd:string,
    se:string,
    si:string,
    sk:string,
    sl:string,
    sn:string,
    so:string,
    ss:string,
    td:string,
    tj:string,
    tl:string,
    tm:string,
    tr:string,
    tw:string,
    tz:string,
    ua:string,
    ug:string,
    us:string,
    uz:string,
    ve:string,
    vn:string,
    vu:string,
    ye:string,
    za:string,
    zm:string
}

const flags: flag  = {
    af,
    ai,
    al,
    am,
    ao,
    ar,
    at,
    au,
    bd,
    be,
    bf,
    bg,
    bi,
    bj,
    bo,
    br,
    bw,
    by,
    ca,
    cd,
    cf,
    cg,
    ch,
    ci,
    cm,
    cn,
    co,
    cr,
    cz,
    de,
    dk,
    dz,
    ee,
    eg,
    er,
    es,
    et,
    fi,
    fj,
    fm,
    fr,
    ga,
    gb,
    ge,
    gf,
    gh,
    gn,
    gr,
    gt,
    gu,
    gw,
    hn,
    hr,
    hu,
    id,
    ins,
    iq,
    ir,
    is,
    it,
    jp,
    ke,
    kh,
    kp,
    kr,
    kz,
    lr,
    ma,
    md,
    mk,
    ml,
    mm,
    mn,
    mw,
    mx,
    mz,
    na,
    nc,
    ne,
    ng,
    nl,
    no,
    np,
    nz,
    pe,
    pf,
    pg,
    ph,
    pk,
    pl,
    pr,
    pt,
    ro,
    rs,
    ru,
    rw,
    sa,
    sb,
    sd,
    se,
    si,
    sk,
    sl,
    sn,
    so,
    ss,
    td,
    tj,
    tl,
    tm,
    tr,
    tw,
    tz,
    ua,
    ug,
    us,
    uz,
    ve,
    vn,
    vu,
    ye,
    za,
    zm
}

export default flags;
